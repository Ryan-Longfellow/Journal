// Temporary array of questions
// var questions = Array.from({ length: 50 }, (v, i) => `Question #${i + 1}`);

var questions = [
    "What emotion have I felt most strongly today? Why?",
    "Describe a time recently when you felt unexpectedly emotional.",
    "What situations make me feel anxious? Are there patterns?",
    "Write about a moment you felt incredibly happy. What sparked it?",
    "How do I react when I am angry? How can I respond better?",
    "When was the last time I felt surprised by my own actions?",
    "Describe a recent situation where you felt disappointed. How did you cope?",
    "What does sadness feel like to me? Are there physical sensations?",
    "How do I feel right now, in this moment?",
    "Reflect on a time when your mood changed rapidly. What caused it?",
    "List 5 qualities you admire about yourself and why.",
    "What are my biggest fears, and what do they say about me?",
    "Describe your ideal day. What makes it perfect?",
    "What are my strongest beliefs? Have they changed over time?",
    "Where do I feel safest? Why?",
    "What parts of my life do I want to improve? How might I do that?",
    "In what ways have I changed in the past year?",
    "What am I most proud of? Why?",
    "What does happiness mean to me?",
    "What are my goals for the next year? Five years?",
    "Describe a relationship that has had a significant impact on you.",
    "How does social interaction affect my mood and energy?",
    "Write about a time you felt misunderstood.",
    "How do I express love? How do I prefer to receive it?",
    "How can I strengthen my relationships with loved ones?",
    "What am I looking for in a friendship?",
    "Reflect on a difficult conversation you’ve had recently. How was it resolved?",
    "What boundaries do I need to set or enforce in my relationships?",
    "In what ways can I become a better listener?",
    "How does my environment (people, places) affect my mental health?",
    "What activities help me relax and feel more at peace?",
    "Write about a difficult experience and how you overcame it.",
    "What does self-care look like for me? Am I practicing it enough?",
    "How do I handle stress? What can I improve?",
    "Reflect on a past mistake. What did it teach you?",
    "What are my coping mechanisms when feeling low? Are they healthy?",
    "How do I deal with loss and grief?",
    "Describe a time you forgave someone. How did it feel?",
    "What makes me feel powerful and in control?",
    "How do I want to grow from my current struggles?",
    "What is my biggest dream? What steps am I taking towards it?",
    "If I had no fear, what would I do differently in my life?",
    "Where do I see myself in 10 years? What am I doing?",
    "What skill do I want to learn? Why?",
    "Describe your perfect job. What makes it ideal?",
    "What do I want my legacy to be?",
    "If money were no object, what would I spend my life doing?",
    "What destinations are on my travel bucket list? Why?",
    "What does success look like to me?",
    "Write about a cause you're passionate about. How can you contribute?",
    "What made me smile today?",
    "Did I learn something new today? What was it?",
    "What am I grateful for today?",
    "Was there a moment today when I could have reacted better? How?",
    "Describe a new idea or inspiration that struck today.",
    "How did I take care of my mental health today?",
    "Did I engage in any self-sabotage today? How can I prevent it?",
    "How did today’s experiences align with my long-term goals?",
    "What challenged me today? How did I handle it?",
    "Write a letter to your future self about today.",
    "What habit do I want to develop for my mental health?",
    "How does my morning routine affect my mood for the day?",
    "What nighttime routine helps prepare me for a good night's sleep?",
    "How does my diet impact my mental health?",
    "What role does exercise play in my mental well-being?",
    "What is one small change I can make today for a healthier life?",
    "How do I balance work/school with relaxation?",
    "What does my ideal work/life balance look like?",
    "How do I deal with procrastination?",
    "Write about a time when changing a habit significantly impacted your life.",
    "List 10 things I am grateful for in my life and why.",
    "How can I introduce more positivity into my daily life?",
    "Write about someone who has positively influenced your life.",
    "What small joys can I find in everyday life?",
    "How does practicing gratitude affect my mental state?",
    "Reflect on a happy memory that always makes you smile.",
    "What are some positive affirmations that resonate with me?",
    "How can I spread kindness today?",
    "What beauty do I see in the world around me?",
    "How do I overcome negative thoughts?",
    "What is the biggest challenge I am facing right now?",
    "How can I approach my problems more creatively?",
    "Write about a time you turned a failure into a lesson.",
    "How do I motivate myself during difficult times?",
    "What fears are holding me back? How can I confront them?",
    "How do external factors (e.g., news, social media) affect my mood and thoughts?",
    "What do I do when I feel overwhelmed?",
    "How can I ask for help when I need it?",
    "What steps can I take to overcome a current obstacle?",
    "Reflect on a past hardship. How does it shape who you are today?",
    "What mindfulness practices help me stay grounded?",
    "How can I become more present in everyday moments?",
    "Write about a time you felt completely at peace.",
    "How does nature impact my mental health?",
    "What activities help me get into a state of flow?",
    "How can I slow down in life and savor the moments?",
    "What does being present look like in my daily life?",
    "How does paying attention to my senses affect my mood?",
    "When do I feel most connected to myself?",
    "How does practicing presence change my interactions with others?",
    "What is my definition of self-care?",
    "How can I prioritize my mental health this week?",
    "What are my non-negotiable self-care practices?",
    "Write about a time self-care made a significant difference in your day.",
    "How do I balance caring for myself with caring for others?",
    "What self-care habit would I like to explore?",
    "How does physical health contribute to my mental wellness?",
    "What self-care practices feel most luxurious to me? Why?",
    "When do I feel most taken care of? What or who makes me feel this way?",
    "What does self-love mean to me?",
    "What achievements am I most proud of?",
    "How do I celebrate my successes, big and small?",
    "Write about a recent accomplishment and how it made you feel.",
    "What obstacles have I overcome that deserve recognition?",
    "How do I reward myself in healthy ways?",
    "Reflect on a journey that was difficult but worth it in the end.",
    "What are some qualities in myself that I feel proud of?",
    "How does celebrating my achievements impact my mental health?",
    "Who supports me in my achievements? How can I show my appreciation?",
    "What future achievements am I working towards?",
    "What is something I need to let go of? Why?",
    "How can I practice forgiveness, both towards myself and others?",
    "Write about a time you forgave someone. How did it affect your relationship?",
    "What grudges am I holding onto? How do they serve me?",
    "How does holding onto the past affect my present and future?",
    "What steps can I take to release anger or resentment?",
    "Describe a situation where you showed yourself compassion and forgiveness.",
    "How can letting go of control improve my life?",
    "What fears am I ready to release? How will I do it?",
    "Reflect on a time when letting go led to peace and resolution.",
    "In what ways do I want to grow in the next year?",
    "How can I step out of my comfort zone more often?",
    "What new things do I want to try, and what's stopping me?",
    "How does personal growth impact my mental health?",
    "What lessons have I learned that I can apply moving forward?",
    "How can I be more open to change?",
    "What does personal development mean to me?",
    "How can I be kinder to myself during periods of growth?",
    "What strengths have I discovered in myself recently?",
    "What does progress look like in my journey of personal growth?",
    "What were the most significant lessons from last year?",
    "How have my priorities changed over time?",
    "Reflect on a turning point in my life. What did I learn?",
    "How have my relationships evolved over the years?",
    "What past experiences continue to shape my present?",
    "What old habits have I successfully changed?",
    "How does reflecting on my past help me understand my present?",
    "What past achievements deserve more recognition?",
    "How have I dealt with changes in my life?",
    "What are the most valuable lessons I’ve learned from my experiences?"
];

document.addEventListener('DOMContentLoaded', function() {
    const bodyElement = document.querySelector('body');
    
    // Event listener to show date picker when 'Custom Date' is selected
    document.getElementById('customDate').addEventListener('change', function() {
        document.getElementById('datePicker').style.display = 'block';
    });

    // Event listener to hide date picker when 'Today's Date' is selected
    document.getElementById('todayDate').addEventListener('change', function() {
        document.getElementById('datePicker').style.display = 'none';
    });

    // Event listener for submit button
    document.getElementById('submitDate').addEventListener('click', function() {
        const todaySelected = document.getElementById('todayDate').checked;
        const customSelected = document.getElementById('customDate').checked;

        // For storing today's date or a custom date
        let date;

        // For storing text for the date, each prompt and goals
        let resultDateText = "";
        let resultPrompt1Text = getRandomQuestion(questions);
        let resultPrompt2Text = getRandomQuestion(questions);
        let resultPrompt3Text = getRandomQuestion(questions);
        let resultGoalsText = "Today is the first of the month! Reflect on your previous goals and make some new ones!";

        // Compare Prompt texts to see if they match, if so, getRandomQuestion will be called again
        while (resultPrompt1Text === resultPrompt2Text || resultPrompt1Text === resultPrompt3Text || resultPrompt2Text === resultPrompt3Text) {
            resultPrompt1Text = getRandomQuestion(questions);
            resultPrompt2Text = getRandomQuestion(questions);
            resultPrompt3Text = getRandomQuestion(questions);
        }

        // Simple if else statement to get today's date or a custom date
        // Only needed since there are two options; if removing custom date, could remove the if statement
        if (todaySelected) {
            date = new Date();
        } else if (customSelected) {
            date = new Date(document.getElementById('datePicker').value + " CST");
        }

        // Check if it is the first of the month to display text for goals
        if (date.getDate() === 1) {
            const resultGoals = document.getElementById('resultGoals');
            resultGoals.style.display = 'block';
            resultGoals.textContent = resultGoalsText;
        }

        resultDateText = parseDate(date);

        document.getElementById('resultDate').textContent = resultDateText;
        document.getElementById('resultPrompt1').textContent = resultPrompt1Text;
        document.getElementById('resultPrompt2').textContent = resultPrompt2Text;
        document.getElementById('resultPrompt3').textContent = resultPrompt3Text;

    });
});

/**
 * Gets the day of the week for the given date.
 *
 * @param {Date} date - the date for which to determine the day of the week
 * @return {string} the name of the day of the week (e.g. "sunday", "monday", etc.)
 */
function getDayOfWeek(date) {
    const numDayOfWeek = date.getDay();
    switch (numDayOfWeek) {
        case 0: dayOfWeek = "sunday"; break;
        case 1: dayOfWeek = "monday"; break;
        case 2: dayOfWeek = "tuesday"; break;
        case 3: dayOfWeek = "wednesday"; break;
        case 4: dayOfWeek = "thursday"; break;
        case 5: dayOfWeek = "friday"; break;
        case 6: dayOfWeek = "saturday"; break;
    }
    return dayOfWeek;
}

/**
 * Returns the name of the month for the given date.
 *
 * @param {Date} date - the input date
 * @return {string} the name of the month
 */
function getMonth(date) {
    const numMonth = date.getMonth() + 1;
    switch (numMonth) {
        case 1: month = "January"; break;
        case 2: month = "February"; break;
        case 3: month = "March"; break;
        case 4: month = "April"; break;
        case 5: month = "May"; break;
        case 6: month = "June"; break;
        case 7: month = "July"; break;
        case 8: month = "August"; break;
        case 9: month = "September"; break;
        case 10: month = "October"; break;
        case 11: month = "November"; break;
        case 12: month = "December"; break;
    }
    return month;
}

/**
 * Parse the given date and return it in the format "Day of Week, Month, Day of Month, Year" ex: "Monday January 1, 2020 (01/01/2020)".
 *
 * @param {Date} date - the date to be parsed
 * @return {string} the parsed date in the specified format
 */
function parseDate(date) {
    // Capitalize first letter of day of week
    const dayOfWeek = getDayOfWeek(date).charAt(0).toUpperCase() + getDayOfWeek(date).slice(1);
    return dayOfWeek + " " + getMonth(date) + " " + date.getDate() + ", " + date.getFullYear() + " (" + (date.getMonth() + 1) + "/"+ date.getDate() + "/" + date.getFullYear() + ")";
}

/**
 * Returns the string of a random question.
 *
 * @param {Array} questions - a list of strings
 * @return {string} the string of a random question
 */
function getRandomQuestion(questions) {
    return questions[Math.floor(Math.random() * questions.length)];
}


