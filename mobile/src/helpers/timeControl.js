import { v4 as uuidv4 } from 'uuid';


export default function BuildTimeControlPayload(action, id){
    return {
        action_id: uuidv4(),
        action: action, 
        action_datetime: new Date(), 
        task_id: id
    };
};

export function FormatTime(time){
    var minutes = parseInt(time / 60);
    return minutes + "m";
};