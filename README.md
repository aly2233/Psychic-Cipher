# Psychic-Cipher

## Curious about wanting to learn tarot? 
Maybe even want to reflect publically to others or privately like a journal about your readings? Our tarot app enables seamless readings with options of spreads consisting of 1 card, 3 cards, and 5 cards. After receiving readings, users have the option to reflect on their readings like a journal entry. In addition, users can post thoughts, opinions, and interpretations on individual cards for other users to see.

## Check it out, live!
[On Heroku](https://psychiccipher.herokuapp.com/#/)

## Technologies Used
+ MongoDB schema database
+ Mongoose-Seed dependency for seeding standard cards
+ ExpressJS setting up backend routes
+ ReactJS and ReduxJS create rontend routes for webpage rendering
+ NodeJS runtime environment that enables broswer-external Javascript

## Features

### Tarot Reading
After mentally reflecting on a question, users can select card spreads of 1, 3, or 5 cards to receive randomly shuffled cards at random positions.
```
  cardReading(reqLength) {
    const handIdx = [];
    while (handIdx.length < reqLength) {
      const randNum = Math.floor(Math.random() * 78);
      if (!handIdx.includes(randNum)) handIdx.push(randNum);
    }

    return handIdx; //return random indexes
  }
 ```
 
 

https://user-images.githubusercontent.com/96323278/163232140-ca940825-a532-4d56-adbc-64a54420aecd.mov



### Profile Posts and Journals
Users can create an account and create public and private reflections on their personal experience with their readings or the cards themselves.
```
      <div id="authored-posts">
          <h1>Tarot Notes</h1>
          <div className='profile-info'>
          <h1>{user?.data.handle}</h1>
          <p>{user?.data.email}</p>
        </div>
        <div className="journal-entries">
          <h2>{journalPosts ? 'Journal Entries' : 'Posts On Card Pages'}</h2>
          <button onClick={toggleJournal} className="create-post-button">{journalPosts ? `Show Card Page Posts` : `Show Journal Posts`}</button>
          <PostIndexContainer journalPosts={journalPosts} limit={10} />
        </div>      
      </div>
```


https://user-images.githubusercontent.com/96323278/163232260-96fc3455-1685-424f-b4fb-cf1b3d958dcf.mov


