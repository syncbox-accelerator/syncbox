---
layout: default
---

[<< back to home](./)

# SYNCBOX | DEVELOPER MANUAL


# Prerequisits

- The operating system of the device that used to install the syncbox must be ***Ubuntu 20.04*** and it must have internet connectivity.
- Must have a user named ***syncbox*** with root priviledges.
- The following packages must be installed before installing the syncbox.
 
NodeJs 
 	
	> sudo apt install nodejs -y
		
MySQL Server 
		
	> sudo apt install mysql-server -y
		
Python Virtual Environment  
 		
	> sudo apt install python3-venv -y 
		
SeaDrive 
		
	> sudo wget https://linux-clients.seafile.com/seafile.asc -O /usr/share/keyrings/seafile-keyring.asc
	> sudo bash -c "echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/seafile-keyring.asc] https://linux-clients.seafile.com/seadrive-deb/focal/ stable main' > /etc/apt/sources.list.d/seadrive.list"
	> sudo apt update -y 
	> sudo apt install seadrive-daemon
		
- Seafile Server and the Training Module must be installed on the cloud server.


# Installation

- Switch to the syncbox user
- Download the syncbox.deb package and install using the following command. The MySQL root user password and the Seafile Server URL should provide as the user inputs. 
		
		> sudo dpkg -i syncbox.deb

( Use https://nextbox.lk  as the Seafile Server for testing )


# Components

|  | Management Server | Web Interface | Webdav Server | Prefetching Module |
|--|--|--|--|--|
| Running Port | 1905 | 3000 | 1900 | 8000 |
| Technologies | NodeJS | ReactJS | GoLang | Python |
| Location | /usr/lib/syncbox/management-server | /usr/lib/syncbox/web-interface | /usr/bin/syncbox_webdav | /usr/lib/syncbox/prefetching-module |


# Files in syncbox.deb

**control file**
- Contains the basic details of the package
Ex: name, version, maintainer, description

**syncbox script**
- Used to start the management server, web interface, WebDAV server, and the prefetching module.

**syncbox.service file**
- Contains the configurations which are required to run the SyncBox script with the system daemon.

**preinst script**
- Check the availability of NodeJS and MySQL and exit if the requirements are not satisfied.
- Get MySQL root password from the user and create my.cnf file for future use.
- Create a directory for mounting the directories.

**postinst script**
- Create the SyncBox user for getting access to the MySQL database and then create a database and required tables for the SyncBox.
- Get the Seafile server URL from the user and update the configuration file.
- Execute the syncbox.service script to enable SyncBox services and make them run when booting the system.

**prerm script**
- Stop SyncBox services and remove them from the system and disable the run on boot functionality.

**syncbox_webdav script**
- This is the customized WebDAV server.

**syncbox_server_setup script**
- Update the seafile server URL in the configurations.

[<< back to home](./)
