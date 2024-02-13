<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $booking_date = $_POST['booking_date'];
    $booking_time = $_POST['booking_time'];
    $email = $_POST['email'];
    $phone_no = $_POST['phone_no'];
    $no_of_persons = $_POST['no_of_persons'];

    // Set up email parameters
    $to = "akshay.devexhub@gmail.com"; // Change this to your desired email address
    $subject = "New Booking Form Submission";
    $message = "Booking Date: $booking_date\n";
    $message .= "Booking Time: $booking_time\n";
    $message .= "Email: $email\n";
    $message .= "Phone Number: $phone_no\n";
    $message .= "Number of Persons: $no_of_persons\n";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo "success";
    } else {
        // Failed to send email
        echo "error";
    }
} else {
    // If not a POST request, redirect to the form page
    header("Location: index.html");
    exit;
}
?>
