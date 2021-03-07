#Usage
Component accepts Date Objects and valid ISO string in the format 
 1) YYYY-MM-DD
 2) YYYY-MM-DDThh:mm:ss
 
 When using Date Object with ISO params please be aware of date may vary based on the timezone
 
 * #####new Date('2001-11-01')
 * Wed Oct 31 2001 18:00:00 GMT-0600 (Central Standard Time) {}
 
 * #####new Date('2001-11-01')
 * Thu Nov 01 2001 08:00:00 GMT+0800 (China Standard Time) {}

Date created using params are 

 * #####new Date(2001,11,1)
 * Sat Dec 01 2001 00:00:00 GMT+0800 (China Standard Time) {}

 * #####new Date(2001,11,1)
 * Sat Dec 01 2001 00:00:00 GMT-0600 (Central Standard Time) {}

The output is a valid ISO string in format 
1) YYYY-MM-DD

