# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY req.txt /code/
RUN apt-get install libmariadb-dev
RUN pip install -r req.txt
COPY . /code/