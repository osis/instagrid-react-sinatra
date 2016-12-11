# Instagrid: A Simple React Instagram Grid via Sinatra 

![Instagrid](https://cloud.githubusercontent.com/assets/347097/18030382/f9ef951e-6c81-11e6-8e15-087b3308a8f7.png)

[**Demo**](http://instagrid.dwayne.io)

## Running Locally

Server uses rack, so it's as easy as...

	bundle install
	rackup

## Running on Cloud Foundry

	cf push APP_NAME
	
## Configuration

Close to the bottom of index.html you'll see this line...
	
	<InstaGrid userID="instagram" />
	
Change the userID value to any instagram user and it will pull their 20 latest photos.
Instragrid uses the public APIs so **no API tokens are needed**.
