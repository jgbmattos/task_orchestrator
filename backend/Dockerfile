FROM python:slim-stretch

WORKDIR /srv

# UPDATE APK CACHE AND INSTALL PACKAGES
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    apt-utils \
    p7zip-full \
    unrar-free \
    unzip \
    make \
    git \
    jq \
    tzdata \
    gcc \
    g++ \
    ca-certificates \
    wget && \
    update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# INSTALL AWS DEPS
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
    echo "America/Sao_Paulo" > /etc/timezone

# ADD Pipefile.lock
ADD Pipfile* ./

# INSTALL FROM Pipefile.lock FILE
RUN pip install --no-cache -U pip pipenv && pipenv install --system

# ADD APP
ADD . .
RUN chmod +x ./app.sh
EXPOSE 80

# ENTRYPOINT
ENTRYPOINT ["bash", "app.sh"]