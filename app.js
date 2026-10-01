const books = [
  {
    "t": "The Shining",
    "a": "Stephen King",
    "c": "Horror",
    "p": 17,
    "op": 20,
    "isbn": "9780307743657",
    "r": 4.8,
    "d": "A landmark haunted-hotel novel blending isolation, family tension and supernatural terror."
  },
  {
    "t": "It",
    "a": "Stephen King",
    "c": "Horror",
    "p": 22,
    "isbn": "9781501142970",
    "r": 4.7,
    "d": "A group of childhood friends confront an ancient evil haunting their hometown."
  },
  {
    "t": "Dracula",
    "a": "Bram Stoker",
    "c": "Horror",
    "p": 9.99,
    "isbn": "9780141439846",
    "r": 4.5,
    "d": "The definitive Gothic vampire classic that helped shape modern horror."
  },
  {
    "t": "The Haunting of Hill House",
    "a": "Shirley Jackson",
    "c": "Horror",
    "p": 17,
    "isbn": "9780143039983",
    "r": 4.6,
    "d": "A chilling psychological ghost story set inside an infamous mansion."
  },
  {
    "t": "Mexican Gothic",
    "a": "Silvia Moreno-Garcia",
    "c": "Horror",
    "p": 18,
    "isbn": "9780525620808",
    "r": 4.4,
    "d": "A glamorous 1950s Gothic mystery filled with family secrets and dread."
  },
  {
    "t": "The Hunger Games",
    "a": "Suzanne Collins",
    "c": "Action & Adventure",
    "p": 14.99,
    "isbn": "9780439023528",
    "r": 4.8,
    "d": "A high-stakes fight for survival in a dystopian televised arena."
  },
  {
    "t": "Jurassic Park",
    "a": "Michael Crichton",
    "c": "Action & Adventure",
    "p": 12.99,
    "isbn": "9780345538987",
    "r": 4.7,
    "d": "Science, suspense and survival collide when cloned dinosaurs escape control."
  },
  {
    "t": "The Martian",
    "a": "Andy Weir",
    "c": "Action & Adventure",
    "p": 19,
    "isbn": "9780553418026",
    "r": 4.8,
    "d": "An astronaut stranded on Mars engineers his own impossible rescue."
  },
  {
    "t": "Treasure Island",
    "a": "Robert Louis Stevenson",
    "c": "Action & Adventure",
    "p": 9.99,
    "isbn": "9780141321004",
    "r": 4.4,
    "d": "Pirates, buried treasure and betrayal in the adventure classic."
  },
  {
    "t": "The Bourne Identity",
    "a": "Robert Ludlum",
    "c": "Action & Adventure",
    "p": 10.99,
    "isbn": "9780553593549",
    "r": 4.5,
    "d": "An amnesiac operative races to uncover his identity while enemies close in."
  },
  {
    "t": "The Hobbit",
    "a": "J. R. R. Tolkien",
    "c": "Fantasy",
    "p": 18.99,
    "isbn": "9780547928227",
    "r": 4.9,
    "d": "Bilbo Baggins leaves his quiet home for an unforgettable quest."
  },
  {
    "t": "Fourth Wing",
    "a": "Rebecca Yarros",
    "c": "Fantasy",
    "p": 29.99,
    "isbn": "9781649374042",
    "r": 4.7,
    "d": "A young scribe enters a brutal war college for dragon riders."
  },
  {
    "t": "Harry Potter and the Sorcerer's Stone",
    "a": "J. K. Rowling",
    "c": "Fantasy",
    "p": 12.99,
    "isbn": "9780590353427",
    "r": 4.9,
    "d": "The beginning of a magical school adventure that became a modern classic."
  },
  {
    "t": "A Game of Thrones",
    "a": "George R. R. Martin",
    "c": "Fantasy",
    "p": 22,
    "isbn": "9780553593716",
    "r": 4.8,
    "d": "Noble houses battle for power while an ancient danger returns."
  },
  {
    "t": "The Name of the Wind",
    "a": "Patrick Rothfuss",
    "c": "Fantasy",
    "p": 19,
    "isbn": "9780756404741",
    "r": 4.8,
    "d": "A legendary hero tells the true story behind his own myth."
  },
  {
    "t": "Gone Girl",
    "a": "Gillian Flynn",
    "c": "Mystery & Thriller",
    "p": 18,
    "isbn": "9780307588371",
    "r": 4.6,
    "d": "A marriage becomes a media spectacle after a wife disappears."
  },
  {
    "t": "The Silent Patient",
    "a": "Alex Michaelides",
    "c": "Mystery & Thriller",
    "p": 17.99,
    "isbn": "9781250301697",
    "r": 4.7,
    "d": "A psychotherapist becomes obsessed with a famous patient who refuses to speak."
  },
  {
    "t": "The Girl with the Dragon Tattoo",
    "a": "Stieg Larsson",
    "c": "Mystery & Thriller",
    "p": 16,
    "isbn": "9780307454546",
    "r": 4.7,
    "d": "A journalist and hacker investigate a decades-old disappearance."
  },
  {
    "t": "The Thursday Murder Club",
    "a": "Richard Osman",
    "c": "Mystery & Thriller",
    "p": 18,
    "isbn": "9781984880987",
    "r": 4.6,
    "d": "Four retirees turn their weekly cold-case hobby into a real investigation."
  },
  {
    "t": "The Woman in the Window",
    "a": "A. J. Finn",
    "c": "Mystery & Thriller",
    "p": 18,
    "isbn": "9780062678423",
    "r": 4.4,
    "d": "An agoraphobic woman believes she witnessed a crime across the street."
  },
  {
    "t": "It Ends with Us",
    "a": "Colleen Hoover",
    "c": "Romance",
    "p": 14.5,
    "isbn": "9781501110368",
    "r": 4.6,
    "d": "A relationship forces one woman to confront difficult patterns from her past."
  },
  {
    "t": "The Love Hypothesis",
    "a": "Ali Hazelwood",
    "c": "Romance",
    "p": 16,
    "isbn": "9780593336823",
    "r": 4.7,
    "d": "A fake relationship between scientists starts feeling unexpectedly real."
  },
  {
    "t": "Pride and Prejudice",
    "a": "Jane Austen",
    "c": "Romance",
    "p": 9.99,
    "isbn": "9780141439518",
    "r": 4.9,
    "d": "Wit, class and attraction collide in one of literature’s defining romances."
  },
  {
    "t": "The Notebook",
    "a": "Nicholas Sparks",
    "c": "Romance",
    "p": 17.99,
    "isbn": "9781455582877",
    "r": 4.6,
    "d": "A sweeping love story about memory, devotion and enduring connection."
  },
  {
    "t": "People We Meet on Vacation",
    "a": "Emily Henry",
    "c": "Romance",
    "p": 16.99,
    "isbn": "9781984806758",
    "r": 4.6,
    "d": "Two best friends take one last vacation to repair what changed between them."
  },
  {
    "t": "Dune",
    "a": "Frank Herbert",
    "c": "Science Fiction",
    "p": 18,
    "isbn": "9780441172719",
    "r": 4.9,
    "d": "Politics, ecology, prophecy and survival on the desert world of Arrakis."
  },
  {
    "t": "Project Hail Mary",
    "a": "Andy Weir",
    "c": "Science Fiction",
    "p": 18,
    "isbn": "9780593135228",
    "r": 4.9,
    "d": "A lone astronaut wakes on a mission that may determine humanity’s future."
  },
  {
    "t": "1984",
    "a": "George Orwell",
    "c": "Science Fiction",
    "p": 9.99,
    "isbn": "9780451524935",
    "r": 4.8,
    "d": "A chilling vision of surveillance, propaganda and authoritarian control."
  },
  {
    "t": "Ready Player One",
    "a": "Ernest Cline",
    "c": "Science Fiction",
    "p": 18,
    "isbn": "9780307887443",
    "r": 4.6,
    "d": "A virtual-reality treasure hunt turns into a race for control of a digital world."
  },
  {
    "t": "Ender's Game",
    "a": "Orson Scott Card",
    "c": "Science Fiction",
    "p": 9.99,
    "isbn": "9780812550702",
    "r": 4.7,
    "d": "A gifted child is trained through war games to fight an alien threat."
  },
  {
    "t": "Atomic Habits",
    "a": "James Clear",
    "c": "Self-Help",
    "p": 22,
    "isbn": "9780735211292",
    "r": 4.9,
    "d": "A practical system for building better habits through small, repeatable changes."
  },
  {
    "t": "The 7 Habits of Highly Effective People",
    "a": "Stephen R. Covey",
    "c": "Self-Help",
    "p": 16.99,
    "isbn": "9781982137274",
    "r": 4.7,
    "d": "A principle-centered framework for effectiveness in work and life."
  },
  {
    "t": "The Subtle Art of Not Giving a F*ck",
    "a": "Mark Manson",
    "c": "Self-Help",
    "p": 16.99,
    "isbn": "9780062457714",
    "r": 4.5,
    "d": "An unconventional guide to choosing what deserves your attention."
  },
  {
    "t": "How to Win Friends and Influence People",
    "a": "Dale Carnegie",
    "c": "Self-Help",
    "p": 16.99,
    "isbn": "9780671027032",
    "r": 4.8,
    "d": "Timeless communication principles for stronger personal and professional relationships."
  },
  {
    "t": "Deep Work",
    "a": "Cal Newport",
    "c": "Self-Help",
    "p": 18.99,
    "isbn": "9781455586691",
    "r": 4.7,
    "d": "A guide to focused, distraction-free work in a noisy world."
  },
  {
    "t": "The Psychology of Money",
    "a": "Morgan Housel",
    "c": "Business & Money",
    "p": 19.99,
    "isbn": "9780857197689",
    "r": 4.9,
    "d": "Short lessons on the behavior and emotions that shape financial decisions."
  },
  {
    "t": "Rich Dad Poor Dad",
    "a": "Robert T. Kiyosaki",
    "c": "Business & Money",
    "p": 12.99,
    "isbn": "9781612680194",
    "r": 4.6,
    "d": "A popular introduction to assets, liabilities and financial thinking."
  },
  {
    "t": "Zero to One",
    "a": "Peter Thiel",
    "c": "Business & Money",
    "p": 18,
    "isbn": "9780804139298",
    "r": 4.6,
    "d": "Ideas on startups, innovation and creating something genuinely new."
  },
  {
    "t": "The Lean Startup",
    "a": "Eric Ries",
    "c": "Business & Money",
    "p": 18,
    "isbn": "9780307887894",
    "r": 4.6,
    "d": "A methodology for testing ideas quickly and building sustainable businesses."
  },
  {
    "t": "Good to Great",
    "a": "Jim Collins",
    "c": "Business & Money",
    "p": 18.99,
    "isbn": "9780066620992",
    "r": 4.7,
    "d": "Research-driven lessons on how companies make sustained leaps in performance."
  },
  {
    "t": "Steve Jobs",
    "a": "Walter Isaacson",
    "c": "Biography",
    "p": 24,
    "isbn": "9781451648539",
    "r": 4.8,
    "d": "A deeply reported biography of the Apple cofounder and product visionary."
  },
  {
    "t": "Becoming",
    "a": "Michelle Obama",
    "c": "Biography",
    "p": 20,
    "isbn": "9781524763138",
    "r": 4.8,
    "d": "A memoir tracing family, education, public life and personal growth."
  },
  {
    "t": "Spare",
    "a": "Prince Harry",
    "c": "Biography",
    "p": 22,
    "isbn": "9780593593806",
    "r": 4.5,
    "d": "A personal memoir about royal life, grief, family and independence."
  },
  {
    "t": "Elon Musk",
    "a": "Walter Isaacson",
    "c": "Biography",
    "p": 35,
    "isbn": "9781982181284",
    "r": 4.6,
    "d": "A detailed portrait of the entrepreneur behind Tesla, SpaceX and other ventures."
  },
  {
    "t": "The Diary of a Young Girl",
    "a": "Anne Frank",
    "c": "Biography",
    "p": 8.99,
    "isbn": "9780553577129",
    "r": 4.9,
    "d": "Anne Frank’s enduring wartime diary of adolescence, fear and hope."
  },
  {
    "t": "Sapiens",
    "a": "Yuval Noah Harari",
    "c": "History",
    "p": 24.99,
    "isbn": "9780062316097",
    "r": 4.7,
    "d": "A sweeping account of human history from early Homo sapiens to modern societies."
  },
  {
    "t": "Guns, Germs, and Steel",
    "a": "Jared Diamond",
    "c": "History",
    "p": 22,
    "isbn": "9780393354324",
    "r": 4.5,
    "d": "An influential exploration of geography, technology and uneven societal development."
  },
  {
    "t": "1776",
    "a": "David McCullough",
    "c": "History",
    "p": 18,
    "isbn": "9780743226721",
    "r": 4.7,
    "d": "A vivid account of the pivotal military year of the American Revolution."
  },
  {
    "t": "The Wright Brothers",
    "a": "David McCullough",
    "c": "History",
    "p": 22,
    "isbn": "9781476728742",
    "r": 4.7,
    "d": "The story of two brothers whose persistence changed transportation forever."
  },
  {
    "t": "A People's History of the United States",
    "a": "Howard Zinn",
    "c": "History",
    "p": 21,
    "isbn": "9780062397348",
    "r": 4.6,
    "d": "A widely read alternative narrative of U.S. history focused on social movements."
  },
  {
    "t": "Charlotte's Web",
    "a": "E. B. White",
    "c": "Children",
    "p": 10.99,
    "isbn": "9780064400558",
    "r": 4.9,
    "d": "A beloved story of friendship between a pig and a remarkably clever spider."
  },
  {
    "t": "The Very Hungry Caterpillar",
    "a": "Eric Carle",
    "c": "Children",
    "p": 10.99,
    "isbn": "9780399226908",
    "r": 4.9,
    "d": "A colorful picture-book classic about counting, food and transformation."
  },
  {
    "t": "Where the Wild Things Are",
    "a": "Maurice Sendak",
    "c": "Children",
    "p": 9.99,
    "isbn": "9780064431781",
    "r": 4.9,
    "d": "A timeless imaginative journey into a land of wild creatures."
  },
  {
    "t": "The Gruffalo",
    "a": "Julia Donaldson",
    "c": "Children",
    "p": 8.99,
    "isbn": "9780142403877",
    "r": 4.9,
    "d": "A clever little mouse invents a monster — then meets one."
  },
  {
    "t": "Matilda",
    "a": "Roald Dahl",
    "c": "Children",
    "p": 8.99,
    "isbn": "9780142410370",
    "r": 4.9,
    "d": "A brilliant young reader discovers unusual powers and stands up to cruel adults."
  },
  {
    "t": "The Great Gatsby",
    "a": "F. Scott Fitzgerald",
    "c": "Classics",
    "p": 17,
    "isbn": "9780743273565",
    "r": 4.7,
    "d": "A glittering, tragic portrait of ambition and illusion in the Jazz Age."
  },
  {
    "t": "To Kill a Mockingbird",
    "a": "Harper Lee",
    "c": "Classics",
    "p": 11.99,
    "isbn": "9780061120084",
    "r": 4.9,
    "d": "A coming-of-age classic centered on justice, empathy and moral courage."
  },
  {
    "t": "The Alchemist",
    "a": "Paulo Coelho",
    "c": "Classics",
    "p": 17.99,
    "isbn": "9780061122415",
    "r": 4.7,
    "d": "A philosophical fable about a shepherd pursuing a personal legend."
  },
  {
    "t": "Little Women",
    "a": "Louisa May Alcott",
    "c": "Classics",
    "p": 11.99,
    "isbn": "9780147514011",
    "r": 4.8,
    "d": "The enduring story of the March sisters growing up, creating and loving."
  },
  {
    "t": "Jane Eyre",
    "a": "Charlotte Brontë",
    "c": "Classics",
    "p": 9.99,
    "isbn": "9780141441146",
    "r": 4.8,
    "d": "A fiercely independent heroine searches for dignity, love and belonging."
  },
  {
    "t": "The Fault in Our Stars",
    "a": "John Green",
    "c": "Young Adult",
    "p": 14.99,
    "isbn": "9780525478812",
    "r": 4.7,
    "d": "Two teenagers fall in love while confronting illness and the limits of time."
  },
  {
    "t": "The Book Thief",
    "a": "Markus Zusak",
    "c": "Young Adult",
    "p": 14.99,
    "isbn": "9780375842207",
    "r": 4.8,
    "d": "A young girl in wartime Germany finds refuge in stolen books and words."
  },
  {
    "t": "The Lightning Thief",
    "a": "Rick Riordan",
    "c": "Young Adult",
    "p": 8.99,
    "isbn": "9780786838653",
    "r": 4.8,
    "d": "A modern demigod discovers Greek myths are very real — and very dangerous."
  },
  {
    "t": "The Giver",
    "a": "Lois Lowry",
    "c": "Young Adult",
    "p": 11.99,
    "isbn": "9780544336261",
    "r": 4.7,
    "d": "A boy discovers the hidden costs behind his seemingly perfect society."
  },
  {
    "t": "Divergent",
    "a": "Veronica Roth",
    "c": "Young Adult",
    "p": 15.99,
    "isbn": "9780062024039",
    "r": 4.6,
    "d": "A teenager challenges the rigid factions dividing a dystopian city."
  },
  {
    "t": "Milk and Honey",
    "a": "Rupi Kaur",
    "c": "Poetry",
    "p": 14.99,
    "isbn": "9781449474256",
    "r": 4.5,
    "d": "A collection exploring love, loss, trauma, healing and femininity."
  },
  {
    "t": "The Sun and Her Flowers",
    "a": "Rupi Kaur",
    "c": "Poetry",
    "p": 16.99,
    "isbn": "9781449486792",
    "r": 4.5,
    "d": "Poems about growth, ancestry, migration, love and self-renewal."
  },
  {
    "t": "Leaves of Grass",
    "a": "Walt Whitman",
    "c": "Poetry",
    "p": 13.99,
    "isbn": "9780140421996",
    "r": 4.7,
    "d": "Whitman’s expansive celebration of self, nature, democracy and the body."
  },
  {
    "t": "The Complete Poems of Emily Dickinson",
    "a": "Emily Dickinson",
    "c": "Poetry",
    "p": 18.99,
    "isbn": "9780316184137",
    "r": 4.8,
    "d": "A broad collection of Dickinson’s compressed, inventive and enduring poems."
  },
  {
    "t": "The Odyssey",
    "a": "Homer",
    "c": "Poetry",
    "p": 14.99,
    "isbn": "9780140268867",
    "r": 4.9,
    "d": "The foundational epic of Odysseus’s long journey home after the Trojan War."
  },
  {
    "t": "Pet Sematary",
    "a": "Stephen King",
    "c": "Horror",
    "p": 16.99,
    "op": 18.99,
    "isbn": "9781982115982",
    "r": 4.8,
    "d": "A family discovers an ancient burial ground with terrifying consequences."
  },
  {
    "t": "The Exorcist",
    "a": "William Peter Blatty",
    "c": "Horror",
    "p": 17.99,
    "isbn": "9780062094360",
    "r": 4.7,
    "d": "A classic tale of possession, faith and a desperate battle against evil."
  },
  {
    "t": "Bird Box",
    "a": "Josh Malerman",
    "c": "Horror",
    "p": 17.99,
    "isbn": "9780062259660",
    "r": 4.5,
    "d": "Survivors navigate a world where seeing the wrong thing can be fatal."
  },
  {
    "t": "The Maze Runner",
    "a": "James Dashner",
    "c": "Action & Adventure",
    "p": 12.99,
    "isbn": "9780385737951",
    "r": 4.6,
    "d": "Teenagers trapped in a deadly maze search for a way out and the truth."
  },
  {
    "t": "Life of Pi",
    "a": "Yann Martel",
    "c": "Action & Adventure",
    "p": 17.99,
    "isbn": "9780156027328",
    "r": 4.7,
    "d": "A shipwrecked boy survives at sea with a Bengal tiger as his companion."
  },
  {
    "t": "The Fellowship of the Ring",
    "a": "J. R. R. Tolkien",
    "c": "Fantasy",
    "p": 18.99,
    "isbn": "9780547928210",
    "r": 4.9,
    "d": "The first stage of the epic quest to destroy the One Ring."
  },
  {
    "t": "The Priory of the Orange Tree",
    "a": "Samantha Shannon",
    "c": "Fantasy",
    "p": 21.99,
    "isbn": "9781635570304",
    "r": 4.6,
    "d": "Dragons, queens and ancient magic collide in a sweeping standalone fantasy."
  },
  {
    "t": "Mistborn: The Final Empire",
    "a": "Brandon Sanderson",
    "c": "Fantasy",
    "p": 18.99,
    "isbn": "9781250318572",
    "r": 4.8,
    "d": "A street thief joins a rebellion powered by an inventive system of magic."
  },
  {
    "t": "The Guest List",
    "a": "Lucy Foley",
    "c": "Mystery & Thriller",
    "p": 18.99,
    "isbn": "9780062868947",
    "r": 4.5,
    "d": "A glamorous island wedding turns deadly when old secrets surface."
  },
  {
    "t": "Big Little Lies",
    "a": "Liane Moriarty",
    "c": "Mystery & Thriller",
    "p": 18.0,
    "isbn": "9780425274866",
    "r": 4.6,
    "d": "Schoolyard tensions and hidden domestic lives build toward a shocking death."
  },
  {
    "t": "Book Lovers",
    "a": "Emily Henry",
    "c": "Romance",
    "p": 15.0,
    "op": 17.0,
    "isbn": "9780593334836",
    "r": 4.7,
    "d": "Two book-industry rivals keep crossing paths during a small-town summer."
  },
  {
    "t": "The Spanish Love Deception",
    "a": "Elena Armas",
    "c": "Romance",
    "p": 18.0,
    "isbn": "9781668002520",
    "r": 4.5,
    "d": "A reluctant workplace pair travels to Spain for a wedding and sparks fly."
  },
  {
    "t": "Dune",
    "a": "Frank Herbert",
    "c": "Science Fiction",
    "p": 18.0,
    "isbn": "9780593201732",
    "r": 4.9,
    "d": "Politics, ecology and prophecy collide on the desert planet Arrakis."
  },
  {
    "t": "The Three-Body Problem",
    "a": "Cixin Liu",
    "c": "Science Fiction",
    "p": 18.99,
    "isbn": "9780765382030",
    "r": 4.7,
    "d": "Humanity confronts the implications of first contact across vast cosmic distances."
  },
  {
    "t": "The Mountain Is You",
    "a": "Brianna Wiest",
    "c": "Self-Help",
    "p": 17.99,
    "isbn": "9781949759228",
    "r": 4.7,
    "d": "A guide to understanding self-sabotage and building emotional resilience."
  },
  {
    "t": "Grit",
    "a": "Angela Duckworth",
    "c": "Self-Help",
    "p": 18.99,
    "isbn": "9781501111112",
    "r": 4.7,
    "d": "Research and stories exploring how passion and perseverance shape achievement."
  },
  {
    "t": "Start with Why",
    "a": "Simon Sinek",
    "c": "Business & Money",
    "p": 17.0,
    "isbn": "9781591846444",
    "r": 4.7,
    "d": "A leadership classic about inspiring action by clarifying purpose first."
  },
  {
    "t": "Educated",
    "a": "Tara Westover",
    "c": "Biography",
    "p": 18.99,
    "isbn": "9780399590528",
    "r": 4.8,
    "d": "A memoir of education, family loyalty and the difficult process of self-invention."
  },
  {
    "t": "Steve Jobs",
    "a": "Walter Isaacson",
    "c": "Biography",
    "p": 24.99,
    "isbn": "9781451648546",
    "r": 4.8,
    "d": "A deeply reported biography of the Apple cofounder and his creative intensity."
  },
  {
    "t": "The Diary of a Young Girl",
    "a": "Anne Frank",
    "c": "Biography",
    "p": 14.99,
    "isbn": "9780385480338",
    "r": 4.9,
    "d": "Anne Frank's enduring diary of adolescence and hiding during the Holocaust."
  },
  {
    "t": "The Wright Brothers",
    "a": "David McCullough",
    "c": "History",
    "p": 18.99,
    "isbn": "9781476728759",
    "r": 4.7,
    "d": "The story of the two brothers who transformed the dream of powered flight."
  },
  {
    "t": "The Splendid and the Vile",
    "a": "Erik Larson",
    "c": "History",
    "p": 20.0,
    "isbn": "9780385348720",
    "r": 4.7,
    "d": "An intimate portrait of Churchill and Britain during a pivotal year of war."
  },
  {
    "t": "The Cat in the Hat",
    "a": "Dr. Seuss",
    "c": "Children",
    "p": 9.99,
    "isbn": "9780394800011",
    "r": 4.9,
    "d": "A mischievous visitor turns a rainy day into a riot of imaginative fun."
  },
  {
    "t": "Goodnight Moon",
    "a": "Margaret Wise Brown",
    "c": "Children",
    "p": 10.99,
    "isbn": "9780694003617",
    "r": 4.9,
    "d": "A soothing bedtime classic built around a gentle ritual of saying goodnight."
  },
  {
    "t": "Green Eggs and Ham",
    "a": "Dr. Seuss",
    "c": "Children",
    "p": 9.99,
    "isbn": "9780394800165",
    "r": 4.9,
    "d": "Rhyming persistence and playful nonsense make trying something new irresistible."
  },
  {
    "t": "The Picture of Dorian Gray",
    "a": "Oscar Wilde",
    "c": "Classics",
    "p": 10.0,
    "isbn": "9780141439570",
    "r": 4.7,
    "d": "A dazzling Gothic novel about beauty, conscience and corruption."
  },
  {
    "t": "One of Us Is Lying",
    "a": "Karen M. McManus",
    "c": "Young Adult",
    "p": 12.99,
    "isbn": "9781524714680",
    "r": 4.6,
    "d": "Five students enter detention, but only four leave alive."
  },
  {
    "t": "Six of Crows",
    "a": "Leigh Bardugo",
    "c": "Young Adult",
    "p": 12.99,
    "isbn": "9781250076960",
    "r": 4.8,
    "d": "A criminal prodigy assembles a dangerous crew for an impossible heist."
  },
  {
    "t": "A Good Girl's Guide to Murder",
    "a": "Holly Jackson",
    "c": "Young Adult",
    "p": 10.99,
    "isbn": "9781984896391",
    "r": 4.8,
    "d": "A student reopens a closed murder case and uncovers dangerous new evidence."
  },
  {
    "t": "The Iliad",
    "a": "Homer",
    "c": "Poetry",
    "p": 15.99,
    "isbn": "9780140275360",
    "r": 4.8,
    "d": "A foundational epic of rage, honor and war during the siege of Troy."
  },
  {
    "t": "Devotions",
    "a": "Mary Oliver",
    "c": "Poetry",
    "p": 20.0,
    "isbn": "9780399563263",
    "r": 4.9,
    "d": "A career-spanning selection of Oliver's luminous observations of nature and life."
  },
  {
    "t": "The Essential Rumi",
    "a": "Rumi",
    "c": "Poetry",
    "p": 16.99,
    "isbn": "9780062509598",
    "r": 4.8,
    "d": "Beloved translations of ecstatic poems on love, spirit and transformation."
  },
  {
    "t": "Naruto, Vol. 1",
    "a": "Masashi Kishimoto",
    "c": "Manga & Comics",
    "p": 11.99,
    "isbn": "9781569319000",
    "r": 4.9,
    "d": "The opening volume of the ninja adventure that follows Naruto Uzumaki's dream."
  },
  {
    "t": "One Piece, Vol. 1",
    "a": "Eiichiro Oda",
    "c": "Manga & Comics",
    "p": 11.99,
    "isbn": "9781569319017",
    "r": 4.9,
    "d": "Monkey D. Luffy begins his voyage to become King of the Pirates."
  },
  {
    "t": "Demon Slayer: Kimetsu no Yaiba, Vol. 1",
    "a": "Koyoharu Gotouge",
    "c": "Manga & Comics",
    "p": 11.99,
    "isbn": "9781974700523",
    "r": 4.9,
    "d": "Tanjiro begins a dangerous quest to save his sister and fight demons."
  },
  {
    "t": "Jujutsu Kaisen, Vol. 1",
    "a": "Gege Akutami",
    "c": "Manga & Comics",
    "p": 11.99,
    "isbn": "9781974710027",
    "r": 4.9,
    "d": "Yuji Itadori enters a hidden world of curses and sorcerers."
  },
  {
    "t": "My Hero Academia, Vol. 1",
    "a": "Kohei Horikoshi",
    "c": "Manga & Comics",
    "p": 11.99,
    "isbn": "9781421582696",
    "r": 4.8,
    "d": "A powerless boy dreams of becoming a hero in a superpowered society."
  },
  {
    "t": "Chainsaw Man, Vol. 1",
    "a": "Tatsuki Fujimoto",
    "c": "Manga & Comics",
    "p": 11.99,
    "isbn": "9781974709939",
    "r": 4.8,
    "d": "A broke devil hunter merges with his chainsaw demon companion."
  },
  {
    "t": "Spy x Family, Vol. 1",
    "a": "Tatsuya Endo",
    "c": "Manga & Comics",
    "p": 11.99,
    "isbn": "9781974715466",
    "r": 4.9,
    "d": "A spy, an assassin and a telepath form a fake family for a secret mission."
  },
  {
    "t": "Attack on Titan, Vol. 1",
    "a": "Hajime Isayama",
    "c": "Manga & Comics",
    "p": 12.99,
    "isbn": "9781612620244",
    "r": 4.8,
    "d": "Humanity's last cities face towering monsters and a generation ready to fight back."
  },
  {
    "t": "A Brief History of Time",
    "a": "Stephen Hawking",
    "c": "Science & Technology",
    "p": 22.0,
    "isbn": "9780553380163",
    "r": 4.8,
    "d": "An accessible exploration of cosmology, black holes, time and the universe."
  },
  {
    "t": "Cosmos",
    "a": "Carl Sagan",
    "c": "Science & Technology",
    "p": 19.0,
    "isbn": "9780345539434",
    "r": 4.9,
    "d": "A sweeping journey through astronomy, evolution and humanity's place in the cosmos."
  },
  {
    "t": "The Gene",
    "a": "Siddhartha Mukherjee",
    "c": "Science & Technology",
    "p": 20.0,
    "isbn": "9781476733524",
    "r": 4.8,
    "d": "A history of genetics and the scientific ideas that reshaped our understanding of heredity."
  },
  {
    "t": "The Code Breaker",
    "a": "Walter Isaacson",
    "c": "Science & Technology",
    "p": 21.99,
    "isbn": "9781982115852",
    "r": 4.7,
    "d": "CRISPR, Jennifer Doudna and the revolution in gene editing."
  },
  {
    "t": "Astrophysics for People in a Hurry",
    "a": "Neil deGrasse Tyson",
    "c": "Science & Technology",
    "p": 18.95,
    "isbn": "9780393609394",
    "r": 4.7,
    "d": "A concise tour of the universe's biggest ideas for readers short on time."
  },
  {
    "t": "The Innovators",
    "a": "Walter Isaacson",
    "c": "Science & Technology",
    "p": 20.0,
    "isbn": "9781476708706",
    "r": 4.7,
    "d": "The people and collaborations behind the digital revolution."
  },
  {
    "t": "The Body",
    "a": "Bill Bryson",
    "c": "Science & Technology",
    "p": 19.0,
    "isbn": "9780385539302",
    "r": 4.8,
    "d": "A witty, wide-ranging tour through the human body and how it works."
  },
  {
    "t": "What If?",
    "a": "Randall Munroe",
    "c": "Science & Technology",
    "p": 18.99,
    "isbn": "9780544272996",
    "r": 4.8,
    "d": "Serious scientific answers to wonderfully absurd hypothetical questions."
  },
  {
    "t": "The Lost World",
    "a": "Michael Crichton",
    "c": "Action & Adventure",
    "p": 12.99,
    "isbn": "9780345538994",
    "r": 4.6,
    "d": "A return expedition discovers that dinosaurs still survive on a remote island."
  },
  {
    "t": "The Woman in Cabin 10",
    "a": "Ruth Ware",
    "c": "Mystery & Thriller",
    "p": 18.99,
    "isbn": "9781501132957",
    "r": 4.5,
    "d": "A travel journalist believes she witnessed a murder aboard an exclusive cruise."
  },
  {
    "t": "Neuromancer",
    "a": "William Gibson",
    "c": "Science Fiction",
    "p": 9.99,
    "isbn": "9780441569595",
    "r": 4.7,
    "d": "A foundational cyberpunk novel of hackers, artificial intelligence and corporate power."
  },
  {
    "t": "The Guns of August",
    "a": "Barbara W. Tuchman",
    "c": "History",
    "p": 20.0,
    "isbn": "9780345476098",
    "r": 4.8,
    "d": "A classic narrative history of the opening month of World War I."
  },
  {
    "t": "Wuthering Heights",
    "a": "Emily Brontë",
    "c": "Classics",
    "p": 9.0,
    "isbn": "9780141439556",
    "r": 4.7,
    "d": "A dark, passionate novel of obsession, revenge and the Yorkshire moors."
  },
  {
    "t": "Frankenstein",
    "a": "Mary Shelley",
    "c": "Classics",
    "p": 10.0,
    "isbn": "9780141439471",
    "r": 4.8,
    "d": "The foundational Gothic novel of creation, responsibility and isolation."
  },
  {
    "t": "Funny Story",
    "a": "Emily Henry",
    "c": "Romance",
    "p": 19.0,
    "isbn": "9780593441282",
    "r": 4.7,
    "d": "Two people with exes in common become roommates and rewrite their own romantic story."
  },
  {
    "t": "The Courage to Be Disliked",
    "a": "Ichiro Kishimi & Fumitake Koga",
    "c": "Self-Help",
    "p": 18.0,
    "isbn": "9781501197277",
    "r": 4.7,
    "d": "A dialogue-driven introduction to Adlerian psychology, freedom and personal responsibility."
  },
  {
    "t": "Shoe Dog",
    "a": "Phil Knight",
    "c": "Business & Money",
    "p": 20.0,
    "isbn": "9781501135927",
    "r": 4.8,
    "d": "Nike's founder recounts the risks, setbacks and relationships behind building the company."
  },
  {
    "t": "The Hard Thing About Hard Things",
    "a": "Ben Horowitz",
    "c": "Business & Money",
    "p": 18.99,
    "isbn": "9780062273208",
    "r": 4.7,
    "d": "Practical lessons on leadership and the difficult decisions required to run a company."
  }
];

const icons={'Horror':'☾','Action & Adventure':'⚔','Fantasy':'✦','Mystery & Thriller':'⌕','Romance':'♥','Science Fiction':'◌','Self-Help':'↗','Business & Money':'▦','Biography':'◉','History':'⌛','Children':'☀','Classics':'❦','Young Adult':'★','Poetry':'✎','Manga & Comics':'▣','Science & Technology':'⚛'};
const categoryOrder=[...new Set(books.map(b=>b.c))];
let active='All'; let cart=JSON.parse(localStorage.getItem('almatv-cart')||'[]');
const $=s=>document.querySelector(s);
const cover=b=>`https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg?default=false`;
const esc=s=>s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
function fallback(el,b){const colors=['#123047','#1d4d42','#6f2330','#78622f','#2d355c','#5c326b']; const bg=colors[Math.abs([...b.t].reduce((n,c)=>n+c.charCodeAt(0),0))%colors.length]; const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='480' height='680'><rect width='100%' height='100%' fill='${bg}'/><rect x='26' y='26' width='428' height='628' rx='8' fill='none' stroke='rgba(255,255,255,.26)' stroke-width='2'/><text x='42' y='86' fill='#83ead3' font-family='Arial' font-size='18' font-weight='700'>${esc(b.c.toUpperCase())}</text><text x='42' y='270' fill='white' font-family='Georgia' font-size='38' font-weight='700'>${esc(b.t).match(/.{1,18}(?:\s|$)/g)?.slice(0,4).map((x,i)=>`<tspan x='42' dy='${i?48:0}'>${x.trim()}</tspan>`).join('')||esc(b.t)}</text><text x='42' y='585' fill='rgba(255,255,255,.75)' font-family='Arial' font-size='20'>${esc(b.a)}</text><text x='42' y='625' fill='#83ead3' font-family='Arial' font-size='15'>almatv-es</text></svg>`; el.onerror=null; el.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)}
function imgHTML(b){return `<img src="${cover(b)}" alt="${esc(b.t)} book cover" loading="lazy" onerror='fallback(this, books[${books.indexOf(b)}])'>`}
function renderCategories(){const tiles=$('#categoryTiles');tiles.innerHTML=categoryOrder.map(c=>`<button class="category-tile" onclick="selectCategory('${c.replace(/'/g,"\\'")}')"><span class="cat-icon">${icons[c]||'◇'}</span><div><b>${c}</b><span>${books.filter(b=>b.c===c).length} books</span></div></button>`).join(''); const chips=$('#filterChips');chips.innerHTML=['All',...categoryOrder].map(c=>`<button class="filter-chip ${c===active?'active':''}" onclick="selectCategory('${c.replace(/'/g,"\\'")}')">${c}</button>`).join('')}
function selectCategory(c){active=c;renderCategories();renderBooks();document.getElementById('catalog').scrollIntoView({behavior:'smooth',block:'start'})}
function getFiltered(){const q=$('#searchInput').value.toLowerCase().trim();let arr=books.filter(b=>(active==='All'||b.c===active)&&(!q||`${b.t} ${b.a} ${b.c}`.toLowerCase().includes(q)));const sort=$('#sortSelect').value;if(sort==='price-low')arr.sort((x,y)=>x.p-y.p);if(sort==='price-high')arr.sort((x,y)=>y.p-x.p);if(sort==='title')arr.sort((x,y)=>x.t.localeCompare(y.t));return arr}
function renderBooks(){const arr=getFiltered();$('#resultCount').textContent=`${arr.length} title${arr.length===1?'':'s'} available`;$('#emptyState').classList.toggle('hidden',arr.length>0);$('#bookGrid').innerHTML=arr.map((b)=>{const i=books.indexOf(b);return `<article class="book-card"><div class="cover-wrap" onclick="openBook(${i})">${imgHTML(b)}<span class="book-badge">${b.op?'SALE':'POPULAR'}</span><button class="wish" onclick="event.stopPropagation();this.textContent=this.textContent==='♡'?'♥':'♡'">♡</button></div><div class="card-body"><div class="card-category">${b.c}</div><h3>${b.t}</h3><div class="author">${b.a}</div><div class="rating">★★★★★ <span style="color:var(--muted)">${b.r}</span></div><div class="price-row"><div><span class="price">$${b.p.toFixed(2)}</span>${b.op?`<span class="old-price">$${b.op.toFixed(2)}</span>`:''}</div><button class="add-btn" onclick="addCart(${i})">Add</button></div></div></article>`}).join('')}
function addCart(i){cart.push(i);localStorage.setItem('almatv-cart',JSON.stringify(cart));updateCart();$('#cartBtn').animate?.([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:220})}
function updateCart(){const count=$('#cartCount');count.textContent=cart.length;const items=$('#cartItems');if(!cart.length){items.innerHTML='<p style="color:var(--muted);padding:25px 0">Your cart is empty.</p>'}else{items.innerHTML=cart.map((idx,pos)=>{const b=books[idx];return `<div class="cart-item">${imgHTML(b)}<div><b>${b.t}</b><span>${b.a}<br>$${b.p.toFixed(2)}</span></div><button class="remove-btn" onclick="removeCart(${pos})">×</button></div>`}).join('')}$('#cartTotal').textContent='$'+cart.reduce((s,i)=>s+books[i].p,0).toFixed(2)}
function removeCart(pos){cart.splice(pos,1);localStorage.setItem('almatv-cart',JSON.stringify(cart));updateCart()}
function toggleCart(open){$('#cartDrawer').classList.toggle('open',open);$('#overlay').classList.toggle('show',open);$('#cartDrawer').setAttribute('aria-hidden',String(!open))}
function openBook(i){const b=books[i];$('#modalContent').innerHTML=`<div class="modal-grid"><div>${imgHTML(b)}</div><div><span class="eyebrow">${b.c.toUpperCase()}</span><h2>${b.t}</h2><div class="modal-meta">by ${b.a} • ISBN ${b.isbn}</div><div class="rating">★★★★★ ${b.r}</div><div class="modal-price">$${b.p.toFixed(2)} ${b.op?`<span class="old-price">$${b.op.toFixed(2)}</span>`:''}</div><p class="modal-copy">${b.d}</p><p class="modal-copy"><b>Edition note:</b> Cover art is loaded from Open Library using this edition’s ISBN. Price is a U.S. retail reference and may change by retailer or edition.</p><button class="modal-add" onclick="addCart(${i});closeModal()">Add to cart</button></div></div>`;$('#bookModal').classList.add('show');$('#bookModal').setAttribute('aria-hidden','false')}
function closeModal(){$('#bookModal').classList.remove('show');$('#bookModal').setAttribute('aria-hidden','true')}
$('#searchInput').addEventListener('input',renderBooks);$('#sortSelect').addEventListener('change',renderBooks);$('#cartBtn').addEventListener('click',()=>toggleCart(true));$('#closeCart').addEventListener('click',()=>toggleCart(false));$('#overlay').addEventListener('click',()=>toggleCart(false));$('#modalClose').addEventListener('click',closeModal);$('#bookModal').addEventListener('click',e=>{if(e.target===$('#bookModal'))closeModal()});$('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');$('#themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾'});
renderCategories();renderBooks();updateCart();
