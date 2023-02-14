import emailJS from '@emailjs/browser';

function sendEmail(name, subject, message, email) {
    return emailJS.send('service_8t897ee', 'template_4tzawop', {
        from_name: name,
        subject: subject,
        message: message,
        email: email
    }, 'CpIWnMMLq_QKwwuKR');
}

const form = document.querySelector('form');
    const name = form.querySelector('.name');
    const email = form.querySelector('.email');
    const subject = form.querySelector('.subject');
    const message = form.querySelector('.message');

export default function handleEmails() {

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (!(name.value && subject.value && message.value && email.value)) {
            alert('Please complete your form correctly');
            // Tornar mais amigavel ao usuario
            return;
        }

        sendEmail(name.value, subject.value, message.value, email.value)
            .then(response => {
                name.value = subject.value = message.value = email.value = '';
                console.log(response.status);
            })
            .catch(() => {
                alert('An error ocured while trying to send your message, pleas try again.');
                // Tornar mais amigavel ao usuario
            });
    });
}