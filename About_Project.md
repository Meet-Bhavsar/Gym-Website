
# Body Crafter Fitness Gym Website

## Project Overview
The Body Crafter Fitness Gym project is a responsive, multi-page website for a fitness center. This project provides information on gym services, available courses, trainers, scheduling, and fitness tips through an engaging, user-friendly design. Built with HTML, CSS, and JavaScript, the website features interactive elements, smooth navigation, and a clean aesthetic to deliver an impactful online presence.

## Features
### Key Sections
1. **Home Page**  
   - A welcoming hero section featuring a carousel with images promoting the gym's environment and classes.

2. **About Us**  
   - Information about the gym’s philosophy, mission, and approach to fitness.

3. **Courses**  
   - Details of available fitness courses, including yoga, weightlifting, boxing, and more. Each course has a dedicated "Read More" link for more information.

4. **Trainers**  
   - Profiles of certified trainers with their specialization to help visitors choose the right trainer.

5. **Schedule**  
   - A timetable that showcases the gym's class schedule for the week, allowing users to plan visits conveniently.

6. **Blog**  
   - A collection of blog posts covering topics such as fitness tips, nutrition advice, and wellness strategies.

7. **Contact Page**  
   - A form for users to contact the gym directly, with integrated email support (configured via XAMPP).

## Technology Stack
- **HTML5**: For structuring the website.
- **CSS3**: For styling and responsive design, including animations and layout.
- **JavaScript**: For adding interactivity, such as navigation toggling and carousel functionality.
- **Swiper.js**: Used for creating the image carousel on the homepage.
- **Boxicons & Google Fonts**: For icons and typography.

## File Structure
```plaintext
.
├── gym.html         # Main HTML file for the website
├── style.css        # Stylesheet for custom styles and responsive design
├── main.js          # JavaScript for navigation and interactive elements
├── /Images          # Folder containing images for different sections
└── /LinkedPages     # Additional HTML files for individual course and blog pages
```

## Setup Instructions
### Requirements
1. **XAMPP** (or any local server environment): Required for hosting the project locally.
2. **Web Browser**: To view the website (Chrome, Firefox, etc.).

### Steps to Run the Project
1. **Install XAMPP**  
   - Download and install [XAMPP](https://www.apachefriends.org/index.html) for setting up a local server.

2. **Add Project to XAMPP’s htdocs Directory**  
   - Place the project folder (e.g., `BodyCrafterGym`) inside the `htdocs` directory of XAMPP, typically found at `C:/xampp/htdocs/BodyCrafterGym`.

3. **Start Apache Server**  
   - Open XAMPP Control Panel and start the Apache server.

4. **Access the Project in Browser**  
   - Open a web browser and navigate to `http://localhost/BodyCrafterGym/gym.html` to view the site.

### Configuring Mail Functionality
To enable email functionality via the contact form:
1. **Edit `php.ini` File**  
   - Open the `php.ini` file in XAMPP and configure the SMTP settings for your email service. Here’s an example for Gmail SMTP:
     ```plaintext
     [mail function]
     SMTP=smtp.gmail.com
     smtp_port=587
     sendmail_from = your-email@gmail.com
     sendmail_path = ""C:/xampp/sendmail/sendmail.exe" -t"
     ```
2. **Configure `sendmail.ini`**  
   - Edit the `sendmail.ini` file in XAMPP to add your SMTP credentials.
     ```plaintext
     smtp_server=smtp.gmail.com
     smtp_port=587
     auth_username=your-email@gmail.com
     auth_password=your-email-password
     ```

3. **Testing the Contact Form**  
   - Fill in the form and submit; if configured correctly, you should receive emails from the site’s contact page.

## Project Highlights
- **Responsive Design**: Built for optimal display across devices (desktop, tablet, and mobile).
- **Interactive UI**: Utilizes JavaScript for a dynamic, engaging experience.
- **Smooth Navigation**: Includes a sliding menu for mobile and carousel elements.
- **Blog & Resources**: Contains informative content for gym members on fitness, health, and wellness.

## Future Enhancements
- **Enhanced User Authentication**: Integrate login features for members.
- **Booking System**: Allow users to book classes and trainer sessions directly on the website.
- **Live Chat**: Incorporate live chat for instant assistance.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more information.
