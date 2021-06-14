var quotes = [
'"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
'"The way to get started is to quit talking and begin doing." -Walt Disney',
'"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking." -Steve Jobs',
'"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt',
'"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough." -Oprah Winfrey',
'"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success." -James Cameron',
'"Life is what happens when you\'re busy making other plans." -John Lennon',
'"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
'"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
'"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
'"Don\'t judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson',
'"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',
'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller',
'"It is during our darkest moments that we must focus to see the light." -Aristotle',
'"You miss 100% of the shots you don\'t take. -Wayne Gretzky',
'"Whether you think you can or you think you can\'t, you\'re right." -Henry Ford',
'"I have learned over the years that when one\'s mind is made up, this diminishes fear." -Rosa Parks',
'"Nothing is impossible, the word itself says, \'I\'m possible!\'" -Audrey Hepburn',
'"The question isn\'t who is going to let me; it\'s who is going to stop me." -Ayn Rand',
'"The only person you are destined to become is the person you decide to be." -Ralph Waldo Emerson',
'"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." -Maya Angelou',
'"Winning isn\'t everything, but wanting to win is." -Vince Lombardi',
'"A successful man is one who can lay a firm foundation with the bricks others have thrown at him." -David Brinkley',
'"Things work out best for those who make the best of how things work out." -John Wooden',
'"Try not to become a man of success. Rather become a man of value." -Albert Einstein',
'"Don\'t be afraid to give up the good to go for the great." -John D. Rockefeller',
'"Always bear in mind that your own resolution to success is more important than any other one thing." -Abraham Lincoln',
'"Success is walking from failure to failure with no loss of enthusiasm." -Winston Churchill',
'"If you genuinely want something, don\'t wait for it -- teach yourself to be impatient." -Gurbaksh Chahal',
'"If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work." -Thomas J. Watson',
'"The only place where success comes before work is in the dictionary." -Vidal Sassoon',
'"If you are not willing to risk the usual, you will have to settle for the ordinary." -Jim Rohn',
'"Before anything else, preparation is the key to success." -Alexander Graham Bell',
'"People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy." -Tony Robbins',
'"Believe you can and you\'re halfway there." -Theodore Roosevelt',
'"An unexamined life is not worth living." -Socrates',
'"Dream big and dare to fail." -Norman Vaughan',
'"You may be disappointed if you fail, but you are doomed if you don\'t try." -Beverly Sills',
'"It does not matter how slowly you go as long as you do not stop." -Confucius',
'"Too many of us are not living our dreams because we are living our fears." -Les Brown',
'"I didn\'t fail the test. I just found 100 ways to do it wrong." -Benjamin Franklin'
];

function newQuote() { 
var randNum = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randNum];
}

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}