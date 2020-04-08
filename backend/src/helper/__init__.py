from datetime import datetime, timedelta


mocked_tasks_list = [
    {
        "id": "c8a726fb-5552-4a9d-a2f5-40702a0ec839",
        "project_id": "CLEAN-1",
        "title": "Refactor offer microservice",
        "description": "Recfactor offer microservice is necessary since lot`s of its code is being unused",
        "creation_date": (datetime.now() - timedelta(days=30)).isoformat(),
        "creator_id": "2eb67396-7fd1-451c-b16c-541f47f5fda4",
        "creator_name": "JOHN DOE",
        "update_date": datetime.now().isoformat(),
        "time_estimate": 1500,
        "current_time_spent": 1500,
        "playing": True,
        "commentaries": [
            {
                "creator_id": "aa301cde-4927-481b-a2bf-2ea87d8cc313",
                "creator_name": "Joe Public",
                "creation_date": (datetime.now() - timedelta(days=2)).isoformat(),
                "description": "Finished v1"
            },
            {
                "creator_id": "aa301cde-4927-481b-a2bf-2ea87d8cc313",
                "creator_name": "Joe Public",
                "creation_date": datetime.now().isoformat(),
                "description": "Finished v2"
            }
        ]
    },
    {
        "id": "048058b9-8cba-45e8-966e-42b297d62a9b",
        "project_id": "CLEAN-2",
        "title": "Refactor consumer microservice",
        "description": "Recfactor consumer microservice is necessary since lot`s of its code is being unused",
        "creation_date": (datetime.now() - timedelta(days=30)).isoformat(),
        "creator_id": "2eb67396-7fd1-451c-b16c-541f47f5fda4",
        "creator_name": "JOHN DOE",
        "update_date": datetime.now().isoformat(),
        "time_estimate": 1500,
        "current_time_spent": 3500,
        "playing": False,
        "commentaries": [
            {
                "creator_id": "aa301cde-4927-481b-a2bf-2ea87d8cc313",
                "creator_name": "Joe Public",
                "creation_date": (datetime.now() - timedelta(days=2)).isoformat(),
                "description": "Finished v1"
            }
        ]
    }
]