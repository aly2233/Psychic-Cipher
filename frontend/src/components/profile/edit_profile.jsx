import { useEffect, useState } from "react"

const EditProfileForm = ({currentUserId, currentUser, fetchUser, updateUser, history}) => {
    
    const [bio, setBio] = useState(currentUser?.bio || "")
    const [astrology_sign, setAstrologySign] = useState(currentUser?.astrology_sign || "")

    useEffect( () => {
        fetchUser(currentUserId)
    },[])

    useEffect( () => {
        if(currentUser) {
            setBio(currentUser.bio);
            setAstrologySign(currentUser.astrology_sign);
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser({id: currentUserId ,bio, astrology_sign})
            .then( history.push('/profile'))
    }

   const updateBio = (e) => bio === null ? setBio(currentUser.bio) :setBio(e.target.value) 
   const updateAstrologySign = (e) => setAstrologySign(e.target.value) 

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Edit Profile</h1>
                <label>Bio
                    <textarea
                        value={bio}
                        onChange={updateBio}
                    />
                </label>
                <select value={astrology_sign} onChange={updateAstrologySign}>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pieces">Pieces</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                </select>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditProfileForm