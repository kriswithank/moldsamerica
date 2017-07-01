FROM python:3.3.6-wheezy

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV FLASK_APP "moldsamerica/app.py"
ENV FLASK_DEBUG "True"

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]