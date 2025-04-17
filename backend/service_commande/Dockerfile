# Use an official Python runtime as a base image
FROM python:3.11-slim

# Set environment variables to prevent Python from writing .pyc files and buffering stdout
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file first to leverage Docker cache
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt and install waitress in a single layer
RUN pip install --no-cache-dir -r requirements.txt \
    && pip install --no-cache-dir waitress \
    && pip install --no-cache-dir gunicorn

# Copy the current directory contents into the container at /app
COPY . .

# Create and use a non-root user for security reasons
RUN adduser --disabled-password --gecos "" appuser \
    && chown -R appuser /app

USER appuser

RUN python manage.py collectstatic --noinput


# Expose port 8000 for the application
EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "service_commande.wsgi:application"]