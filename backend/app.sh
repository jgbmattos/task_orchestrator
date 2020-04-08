APP_NAME="TASK_ORCHESTRATOR"

#   By default (without ECS_ENVIRONMENT set) we run as "dev"
if [[ -z "${ECS_ENVIRONMENT}" ]]
then
	ECS_ENVIRONMENT="dev"
fi


if [[ "$ECS_ENVIRONMENT" == "dev" ]]
then
    for DOTENV_VAR in $(cat .env-dev)
        do
            export ${DOTENV_VAR}
        done
        echo -ne "Variables Loaded From .env\n"
fi

echo -ne "Running...\n"
echo -ne "-----------------------------------\n\n"

export PYTHONPATH=$(pwd)
python ./src/app.py