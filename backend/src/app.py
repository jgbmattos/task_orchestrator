from src.settings import HOST, PORT, DEBUG
from flask import request
from src.utils.app_factory import create_app
from src.utils.log import logger

app = create_app()


@app.before_request
def before_request():
    if request.path != '/lno/storage-manager/health-check':

        logger.info(msg=request.data)


@app.after_request
def after_request(response):
    if request.path != '/lno/store-manager/health-check':

        if response.status_code < 400:
            logger.info(msg=response.data)
        else:
            logger.error(msg=response.data)

    return response


if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=DEBUG)

