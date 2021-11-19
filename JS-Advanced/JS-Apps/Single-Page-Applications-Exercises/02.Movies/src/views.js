/*
export async function getMovie(id) {
    const userData = JSON.parse(localStorage.getItem('userData'));

    const [movieRes, likesRes, hasLikedRes] = await Promise.all([
        fetch(`http://localhost:3030/data/movies/` + id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=${userData.id}&count`)
    ]);
    const [movieData, likes] = await Promise.all([
        movieRes,
        likesRes
    ]);

    createDetails(movieData);

}
*/