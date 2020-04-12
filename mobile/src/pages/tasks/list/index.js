import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
//import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../../services/api';
import buildTimeSpentPayload, { FormatTime } from '../../../helpers/timeControl'
import mockedTaskList from './mocked_task_list';

export default function TasksList() {
    const [tasksList, setTasksList] = useState([]);
    const timeSpentControl = [];
    let dateTimeStart = null;
    let dateTimeEnd = null;
    const navigation = useNavigation();

    function navigateToDetail(task){
        navigation.navigate('TaskDetails', task);
    };

    function timeSpentHandler(){
        if (dateTimeStart == null){
            dateTimeStart = new Date().getTime();
            return
        }

        let refreshTaskListArray = [];
        for (var task_id in tasksList){
            if (tasksList[task_id].playing){
                tasksList[task_id].current_time_spent = tasksList[task_id].current_time_spent + parseInt((new Date().getTime() - dateTimeStart) / 1000);
                dateTimeStart = new Date().getTime();
            };
            refreshTaskListArray.push(tasksList[task_id]);
        };
        setTasksList(refreshTaskListArray);
    };

    function taskTimeExecutionHandler(task){
        const newTaskArray = []
        timeSpentHandler();
        dateTimeStart = null;
        
        for (var task_id in tasksList){
            if (tasksList[task_id].id == task.id){
                const action = task.playing ? "stopping" : "starting"
                timeSpentControl.push(buildTimeSpentPayload(action, task.id));
                tasksList[task_id].playing = !tasksList[task_id].playing;
            } else if (tasksList[task_id].playing) {
                tasksList[task_id].playing = false;
                timeSpentControl.push(buildTimeSpentPayload("stopping", tasksList[task_id].id));
            };
            newTaskArray.push(tasksList[task_id])
        }
        setTasksList(newTaskArray);
    }

    async function getTasksList(){
        if (! tasksList.length){
            try{
                await api.get('/tasks').then(response => {setTasksList(response.data)});
                console.log('pegando da APi');
            } catch (error) {
                setTasksList(mockedTaskList);
                console.log('pegando do mock')
            }
        }
    };

    useEffect(() => {
        getTasksList();

        const interval = setInterval(() => {
            timeSpentHandler();
          }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                   Você tem <Text style={styles.headerTextBold}>{tasksList.length} tarefas abertas</Text>
                </Text>
            </View>

            <FlatList
                style = {styles.flatList}
                data={tasksList}
                keyExtractor={task => String(task.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item: task})=>(
                    // <TouchableWithoutFeedback onPress={() => navigateToDetail(task)}>
                        <View style={styles.taskCard}>
                            <View style={styles.taskItem}>
                                <View style={styles.taskHeader}>
                                    <Text style={styles.taskProjectId}>#{task.project_id}</Text>
                                    <Text style={styles.taskTitle}>{task.title}</Text>
                                </View>
                                <View style={styles.taskContent}>
                                    <Text style={styles.taskDescriptionLabel}>Description</Text>
                                    <Text style={styles.taskDescription}>{task.description}</Text>
                                </View>
                                <View style={styles.taskFooter}>
                                    <TouchableOpacity
                                        onPress={()=>taskTimeExecutionHandler(task)}
                                    >
                                        <Feather style={styles.taskTimeButton} name={(task.playing ? "pause-circle" : "play-circle")} size={30}></Feather>
                                    </TouchableOpacity>
                                    <View style={styles.taskTimeStatistics}>
                                        <Text style={[parseInt(task.time_estimate / 60) >= parseInt(task.current_time_spent / 60) ? styles.taskNotBreached : styles.taskBreached]}>{FormatTime(task.current_time_spent)}</Text>
                                        <Text style={styles.taskFixedBar}>/</Text>
                                        <Text style={styles.timeEstimate}>{FormatTime(task.time_estimate)}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    // </TouchableWithoutFeedback>
            )}/>       
        </View>
    );
}