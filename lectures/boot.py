from flask import Flask, render_template
app=Flask(__name__)

@app.route('/')
def root():
	return render_template('bootnav.html'),200 
	# 200-http status code

if __name__ == "__main__":
	app.run(host='0.0.0.0', debug=True)