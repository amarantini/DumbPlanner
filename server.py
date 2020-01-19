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
        course_list = request.form.getlist('course')
        
        checked_course_list = deleteenrolledcourse(course_list)
        result = ""
        for i in checked_course_list:
            result += i+", "
        return render_template('index.html',output=result)



if __name__ == '__main__':
    app.run(debug=True, port=54321)