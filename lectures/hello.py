from flask import Flask,render_template
app=Flask(__name__)

@app.route('/hello/<name>')
def hello(name=None):
	user={'name':name}
	return render_template('hello.html',user=user)

@app.route('/')
def default():
	return("Hello")
@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
	return render_template('condition.html',name=name)

@app.route('/users/')
def users():
	names=['simon','thomas','lee','jamie','Krist','Singto']
	return render_template('loops.html', names=names)

@app.route('/inherits/')
def inherits():
	return render_template('base.html')

@app.route('/inherits/one/')
def inherits_one():
	return render_template('inherits1.html')

@app.route('/inherits/two/')
def inherits_two():
	return render_template('inherits2.html')

if __name__=="__main__":
	app.run(debug=True)