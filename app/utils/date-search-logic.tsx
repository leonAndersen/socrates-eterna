import comicData from "../data/comic-data.json";

export function getCleanResults(matches) {
    const cleanResults = matches.map((comic) => ({
        id: comic.id,
        metadata: {
            filename: comic.metadata.filename,
            published: comic.metadata.published,
            title: comic.metadata.title,
        },
    }));
    return cleanResults;
}


export async function dateSearch(query, limit = 3) {
    console.log("query/dateLogic:", !!query)
    console.log("limit:", limit)
    const targetDate = new Date(query).getTime();
    const closestToDateComics = [...comicData]
        .sort((a, b) => {
            const aDifference = Math.abs(new Date(a.metadata.published).getTime() - targetDate);
            const bDifference = Math.abs(new Date(b.metadata.published).getTime() - targetDate);
            return aDifference - bDifference;
        })
        .slice(0, limit);

    console.log("targetDate", targetDate)
    
    const cleanResults = getCleanResults(closestToDateComics);

    return cleanResults;
}
