**About the Informatio Blog**  [Blog Link](https://informatioblog.vercel.app)

Making Web 3 accessible to everyone on the internet. Informatio is open to everyone, every individual as you can become a member and contribute your insights about web 3 to the blog. To become a contributor, you will have to register with us via the members registration page and login with your correct credentials. The login page takes you to your contributor's dashboard with which you can make your blog contribution. Your post will be made public upon approval by the site's admin.

**Purpose of Informatio**
Our mission is to make web 3 accessible to everyone. We give insights about the blockchain and every other topic related to the blockchain. We post an article on our blog after careful review by the site's admin. Our blog is not an admin only blog (members can also post meaningful contents but with the admin's approval).

## Key Features of Informatio
A general blog page, single post page, admin dashboard, admin registration page, admin login page, contributor's dashboard, contributors's registration page, contributor's login page, contact form, search form, mobile responsive menu, responsive website across all devices, intuitive interface.

### Technologies used
Next.js, PostgreSQL, Tailwind CSS, JavaScript, Node.js, Axios, Nodemailer, AOS, Pinata Cloud App. Note that Informatio was built from scratch using these technologies. 

## General Blog Page
The general blog page is the first page of the blog. It is a two column page which consists of a main bar and a sidebar. It shows all posts submitted by the admin and all approved posts of members or contributors. It shows the following properties of a blog post: image, video, title, description (excerpt), date of post, name of contributor, category of post and the post id(post id can be seen by only the admin when logged in).

## Single Post Page
The single post page is the page you see when you click on "continue reading". It shows the complete post of a blog post with enlarged image and full description and title. It is also a two column page with a main bar and the site's sidebar. It shows the following properties of a blog post: Full image or video, title, description (full description), date of post, name of contributor, category of post and an option to copy post url and share to social networks. Technically, the site uses cookies to achieve the single post page.

## The Admin Dashboard
The admin dashboard plays the most important role of the blog. Without the admin panel, there is no Informatio blog. All posts posted by the admin are automatically approved and instantly appear on the blog. The admin dashboard offers a wide variety of options in controlling the blog. With an intuitive and sleek design, this dashboard helps an admin to control the blog effortlessly. And just so you know, this admin dashboard greets you and displays your name. It knows if you are a man or a woman. For the sake of this project, the blog offers the following options in controlling the blog: Add post, update post, delete post, view unapproved posts, and approve posts before they appear on the general blog page. In adding a post, the image or video is added by putting the image or video link from a file storage cloud (Filebase or Pinata). The blog then displays it. The admin dashboard is fully responsive and extensively tested to make its usage experience smooth. When you are done, you can logout using the logout button.

## The Admin Registration Page
To become an admin of the blog, you have to register as an admin through a secret page that is not publicly accessible on the website or site's menu. (I made it this way for security purposes.) This admin registration page can be accessed at https://informatio.vercel.app/adminregister. It takes in the following details for registration: full name, email, phone number (optional), password, country, and gender. When you click on the "Become an admin" button, it takes you automatically to the admin login page.

## The Admin Login Page
To login as an admin to the admin dashboard using this page, input your credentials (email, password and admin secret key). The admin secret key can be found in the tables.sql file of the site's folders. "Note that members cannot login to the admin dashboard. Why? Because separate sql tables have been created for both admin and members."

## Contributor's Dashboard
To become a contributor, you must first register as a member using the contributor's registration page. In the contributor's dashboard, you can add a post by providing the following details: image link or video link, title, date, description and category. Your post will be added to our database when you click on the "Add blog post" button, but it will only become public when an admin has approved it.

## Contributor's Registration Page
You become a member or contributor through this page. Click on the "Become a contributor" tab on the site's menu and proceed with the registration. It takes in the following details: full name, email, phone number (optional), password, country, and gender. When you click on the "JoinInformatio" button, it takes you automatically to the contributor's login page.

## Contributor's Login Page
Click on the "Login" tab on the site's menu and input the following to login to your contributor's dashboard: email, password.

## Contact Form
Informatio features a super fast Nodemailer contact form where our users (registered or unregistered) can communicate directly with the informatio team. You can click on the "Contact" tab from the menu and it will take you straight to the contact page. Input all or some of the following details to connect: Full name, subject of message, email, phone number (optional), and your message. Upon sending, you will receive a notification that your message has been delivered successfully.

## Search Bar
You can search for any post on the website using the search bar. Just input the word(s) and the result(s) will be displayed to your screen.

## Side Bar
The sidebar of the website features tags, social links and trending posts on the blog.

## Developer
- [Patrick Ominisan](https://github.com/mrpatrick030) - Full stack web & blockchain developer.

### Licence
The Informatio blog is licensed under the MIT license.