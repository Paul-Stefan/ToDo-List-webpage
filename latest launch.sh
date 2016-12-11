mkdir myProject
cd myProject
vagrant init ubuntu/xenial64
vagrant up
vagrant ssh	
sudo apt-get update
sudo apt-get install build-essential -y
sudo apt-get install libz-dev
sudo apt-get install ruby-full -y
sudo gem install rails
sudo gem install bundler
sudo apt-get install mysql-server mysql-client libmysqlclient-dev -y
sudo gem install mysql2
	# #UBUNTU
	# #ssh into ubuntu
	# vagrant ssh
	# #Update your package manager first:	sudo apt-get update
	# sudo apt-get update
	# sudo apt-get install build-essential -y
	# sudo gem install bundler
	# sudo apt-get install libz-dev
	# sudo apt-get install mysql-server mysql-client libmysqlclient-dev -y
	# sudo mysql_install_db
	# sudo gem install mysql2

	# #install ruby onto ubuntu using sudo check using RUBY_VERSION
	# sudo apt-get install ruby-full -y
	# #and some more
		
		
	# #install rails
	# sudo gem install rails
	
	# #installing mysql (will later be postgre)
	# #enter a new password for root user
	# #create its database directory structure where it will store its information

	
	
	
	# #add dependincies van https://gorails.com/setup/ubuntu/16.04