from flask import Flask, render_template, request
from courselist import *
app = Flask(__name__)

@app.route('/')
def render_main():
    return render_template('index.html')

@app.route('/', methods = ['POST', 'GET'])
def check_course_list():
    if request.method == 'POST':
        course_list = []
    for key, val in request.form.items():
        if key.startswith("course"):
            course_list += val
    checked_course_list = deleteenrolledcourse(course_list)
    return render_template('index.html',output=checked_course_list)



if __name__ == '__main__':
    app.run(debug=True, port=54321)