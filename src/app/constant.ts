
import {News} from "./models/News";
import {Event} from "./models/Event";
/**
 * Created by rohanarora on 19/01/17.
 */
export const EVENTS: Event[] = [
  {id:1,title:"Coding BootCamp",description:"Coding Ninjas presents #switchtocode open for all - Free Programming Bootcamp! \r\n\r\nReserve your seat in one of the 4 different tracks to follow :- \r\n\r\n1. Beginners - get introduced to the world of programming\r\n2. Data Structures - suitable for students who have done an introductory course in computer science.\r\n3. Web Development\r\n4. Android App Development\r\n\r\nRegistration Link : https://goo.gl/forms/q2pJ9lscwVosC44I3\r\n\r\nTuesday, 25th October 2016 at Coding Ninjas, Pitampura! 4PM Sharp!\r\n\r\nPS: Bring your laptops! This will be a hands-on BootCamp! #codingninjas",
    from_timestamp:1477411200,to_timestamp:1477420200,ticket_url:"https://goo.gl/forms/q2pJ9lscwVosC44I3",
    ticket_price:0 ,venue_title:"Coding Ninjas",venue_lat:28.6975258,venue_long:77.1409264,cover_image_url:"//s3.amazonaws.com/voicemailsparikh/events/cover_images/000/000/001/original/14707917_567362226800946_1109353550675276139_o.png?1477104095"
  },
  {id:2,title:"DevFest New Delhi '16","description":"GDG New Delhi and GDG BVP brings to you DevFest 16, the biggest Google tech conference in New Delhi carefully crafted for you by GDG community! All about Android, Web and Cloud from the experts. \r\n\r\nCheckout the website for more info : https://gdgnd-devfest16.firebaseapp.com/\r\n\r\nTHINK OUT OF THE BOX. CREATE WHAT YOU WANT!",
    from_timestamp:1475920800,to_timestamp:1475949600,ticket_url:"https://goo.gl/ynihTm",ticket_price:0,
    venue_title:"Coding Ninjas",venue_lat:28.6975258, venue_long:77.1409264,cover_image_url:"//s3.amazonaws.com/voicemailsparikh/events/cover_images/000/000/002/original/announce.png?1477104541"
  }
];

export const  NEWS: News[] = [
  {id:1,title:"DevFest New Delhi - Call For Papers Time",content:"GDG DevFest New Delhi 2016 has been announced! The biggest conference about Google technologies in New Delhi will take on October 8 at Coding Ninjas.\r\n\r\nThat means that it is time to open call for talk submissions. If you are passionate about your work and want to share your experience with the biggest tech audience in New Delhi, you knocked on the right door.\r\n\r\nIt was an awesome DevFest last year at Google Gurgaon. To keep up this year, we decided to focus on the content. We’re looking for speakers like you, who are ready to rock the stage and deliver the best talk or workshop in the field.\r\n\r\nCall for Papers will stay open until September 7, 2016. Don’t miss out :)\r\n\r\nAny questions? Email organizers at gdgnewdelhi@gmail.com",
    url:"https://gdgnd-devfest16.firebaseapp.com/blog/posts/c4p-time/",
    cover_image_url:"//s3.amazonaws.com/voicemailsparikh/news/cover_images/000/000/001/original/c4p-is-open.jpg?1477104398",
    timestamp:1476997770},
  {id:2,title:"DevFest New Delhi '16 Announced",content:"Google Developers Groups New Delhi and BVP are proud to announce the annual GDG DevFest 2016 which is the biggest Google related event in New Delhi carefully crafted by GDG community! The event will take place on 8th of October at Coding Ninjas, New Delhi.\r\n\r\nWhat to expect\r\nIn 2015 the conference was visited by 150+ attendees and 8 speakers from the region and this year it's gonna be even bigger with speakers from companies like Google, Coding Ninjas etc. and more Google Developer Experts!\r\nEvery year more than 90% of our participants are experienced developers and students, so DevFest will keep technical sessions without any marketing nonsense.\r\nMultiple parallel tracks.\r\nExpanded workshop area where participants will have an opportunity to get some new practical skills from the best developers in Google-related technologies.\r\nSo hurry and register now as you’ll get a huge inspiration to create your cool projects after this in the company of coders, hackers, geeks and just experts of our industry.\r\n\r\nFestival organizers\r\nGoogle Developer Group New Delhi (GDG ND) in conjunction with the Google Developers Group BVP (GDG BVP). GDG aims to share experiences and gain new knowledge. Each group - is open to all community of developers that create exciting projects and share their experience with passion about Google technologies.\r\n\r\nYou can find information about registration, speakers, tickets and other latest news on the Facebook, Twitter or Google+. Don’t miss anything interesting!\r\n\r\nAnd most importantly: Make the most of development. Make the most of you!",
    url:"https://gdgnd-devfest16.firebaseapp.com/blog/posts/devfest-2016-announced/",
    cover_image_url:"//s3.amazonaws.com/voicemailsparikh/news/cover_images/000/000/002/original/14570434_559186937618475_3956971623426658250_n.png?1477104475",
    timestamp:1476997961},
  {id:3,title:"DevFest New Delhi '15 Summary",content:"GDG DevFest New Delhi 2015 is now over. It was a great success. We are happy to share with you some facts, emotions and, of course, photos from the biggest Google Developers conference in New Delhi!\r\n\r\nOn behalf of the GDG ND’s Team we warmly thank you for helping make GDG DevFest New Delhi 2015 a huge success. A BIG THANK to all the volunteers from different GDG groups of New Delhi for their priceless help, thanks to all the speakers for the great speeches and sharing their experience and knowledge, and, of course, thanks to all our partners.\r\n\r\nThe event took place on 18th of October at the Google Gurgaon Office. DevFest was focused on Android, Web and Cloud technologies and also Community Hub. Over 150 people participated in the event with a mix of students and working professionals.\r\n\r\nThese two days were full of discoveries and records:\r\n\r\n150 participants\r\nparallel tracks of Android and Web technologies and also community hub.\r\n8 sessions. No marketing - just technical hardcore!\r\nThank you all!! You are awesome! Keep in touch with us! Cheers! ;)",
    url:"https://gdgnd-devfest16.firebaseapp.com/blog/posts/devfest-nd-summary/",
    cover_image_url:"//s3.amazonaws.com/voicemailsparikh/news/cover_images/000/000/003/original/summary.jpg?1477104500",
    timestamp:1476998067}
];

