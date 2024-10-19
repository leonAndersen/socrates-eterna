import React from 'react'
import SearchBar from '~/components/comics/search-bar'
import ResultsPage from '~/components/comics/results-page'
import ModeMeaningBar from '~/components/comics/mode-meaning-bar'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { semanticSearch } from '~/utils/semantic-search-logic'
import { json } from "@remix-run/node";

interface Metadata {
    filename: string;
    title: string;
    publishedAt: string;
}

interface ComicData {
    id: string;
    score: number;
    values: any[];
    metadata: Metadata;
}

interface LoaderData {
    query: string;
    dateQuery: string;
    results: ComicData[];
}



export async function loader({ request }) {
    const url = new URL(request.url);

    const query = url.searchParams.get("search") || "";
    console.log(`query: ${query ? query : "no query"}`);

    const dateQuery = url.searchParams.get("date") || "";
    console.log(`dateQuery: ${dateQuery ? dateQuery : "no dateQuery"}`);

    const results = query ? await semanticSearch(query) : [];

    console.log("results:", results)

    return json({ query, results });
}





export default function ResultsMeaningRoute() {
    const { results, query } = useLoaderData<LoaderData>()
    const navigation = useNavigation();
    const isSearching = !!navigation.location?.search;
    const mode = "meaning";

    return (
        <ResultsPage {...{ mode, results, isSearching, query }}>
            <ModeMeaningBar {...{ isSearching, query }} />
        </ResultsPage>
    )
}