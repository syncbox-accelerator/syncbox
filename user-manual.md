---
layout: default
---

[<< back to home](./)

# SYNCBOX | USER MANUAL

## Prerequisits

1. Moniter with HDMI support.
2. USB Keyboard.
3. Router which has a WIFI or LAN interface with internet connectivity.


## Initial Configurations

1. Connect the keyboard and the monitor and turn on the SyncBox. 
2. Login to the SyncBox using the username and password which are given.
3. Connect SyncBox to the router using WIFI or RJ45 cable.
	
	3.1.	Connect to internet using WIFI
	- Execute `ip a` command and find the WIFI interface name 
	- Execute `wifi_credentials` command to set the wifi credentials

			> Enter WIFI interface name (check using command ip a): wlo1
			> Enter WIFI SSID: home_broadband
			> Enter WIFI password: *************

4. Execute `syncbox_server_setup` command to set the seafile server URL. 
	
		> Enter Seafile server URL: https://nextbox.lk

5. Find the ip address which assigned by the router for the WIFI interface.
6. Remove the keyboard and the monitor.
7. Use that IP address to connect to the SyncBox through LAN.

# Functionalities

To access the functionalities of the syncbox you are required to have a account on the seafile server which was provided during the configurations.

## Adding User to the SyncBox

When you access the SyncBox using the IP address via a browser it will redirect you to the auth page. Select the register form and provide the username and password of the account to register to the SyncBox. SyncBox must be connected to the internet to this operation.

![register_page](https://i.ibb.co/qJK8kz8/Screenshot-from-2022-03-24-15-38-30.png)


## Logging to the SyncBox

If you are already registered with the SyncBox you can login to the SyncBox with the username and password using the login form in the auth page. 

![login_page](https://i.ibb.co/3TqwmRz/Screenshot-from-2022-03-24-15-49-09.png)

When the user changed the seafile server password and trying to login to the SyncBox, 
 - ***Case 01***: If SyncBox is connected to the internet, Use the new password to login to the SyncBox.
 - ***Case 02***: If SyncBox is not connected to the internet, Use the old password to login to the SyncBox.

## Accessing a file

Login to the SyncBox with registered username and password via any standard WEBDAV client to access the files. 

![webdav_login](https://i.ibb.co/92gTBHt/Screenshot-from-2022-03-25-00-48-20.png)

The files you see first are not the complete real ones. They are only metadata of files synced with the seafile server to save your cost. If you want to access a file at this time, you can download it by clicking on it. If not you can schedule to download the file by log in to the syncbox through web interface.

![meta_data](https://i.ibb.co/kHXPVLh/unnamed.png)

## Scheduling file downloads

When you login to the SyncBox using the browser, it will redirect you to your file system which is similar to the files saved on the seafile server. SyncBox lets you schedule one or more files at once.

![meta_data](https://i.ibb.co/nMgnvGr/Screenshot-from-2022-03-25-15-17-28.png)

### 1. Single file scheduling

- Click on the download icon to access the scheduling form.
- Select the scheduling date & time and click on the schedule button to schedule the file to be downloaded.

![meta_data](https://i.ibb.co/7J70GPf/Screenshot-from-2022-03-25-15-19-27.png)

### 2. Multiple files scheduling

- Use the check box next to each file name to select the files to be scheduled.
- If you want to schedule all the files in the directory, use the checkbox in the table header.
- Click on the download icon next to the checkbox in the table header to access the scheduling form.
- Select the scheduling date & time and click on the schedule button to schedule the selected files to be downloaded.

![meta_data](https://i.ibb.co/68dHKN8/Screenshot-from-2022-03-25-15-20-49.png)

## Remove schedule downloads

Use schedules tab in the SyncBox GUI to view the files that are scheduled to download. Click on the bin icon to remove the schedule if you want to not to download that file. Multiple file removing option is also avaiable.

![meta_data](https://i.ibb.co/MfycS8R/Screenshot-from-2022-03-25-15-22-09.png)

[<< back to home](./)
