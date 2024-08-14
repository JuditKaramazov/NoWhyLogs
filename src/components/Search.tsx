import Fuse from "fuse.js"
import { useEffect, useRef, useState, useMemo } from "react"
import Card from "@components/Card"
import type { CollectionEntry } from "astro:content"

export type SearchItem = {
  title: string
  description: string
  data: CollectionEntry<"blog">["data"]
  slug: string
}

interface Props {
  searchList: SearchItem[]
}

interface SearchResult {
  item: SearchItem
  refIndex: number
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputVal, setInputVal] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  )

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  const fuse = useMemo(
    () =>
      new Fuse(searchList, {
        keys: ["title", "description"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.5,
      }),
    [searchList]
  )

  useEffect(() => {
    // Inserts search query in input field if the URL has it.
    const searchUrl = new URLSearchParams(window.location.search)
    const searchStr = searchUrl.get("q")
    if (searchStr) setInputVal(searchStr)

    // Focuses cursor at the end of the string.
    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0
    }, 50)
  }, [])

  useEffect(() => {
    // Adds search results - only if the input value is more than one character.
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : []
    setSearchResults(inputResult)

    // Updates search string in the URL.
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.set("q", inputVal)
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString()
      history.replaceState(history.state, "", newRelativePathQuery)
    } else {
      history.replaceState(history.state, "", window.location.pathname)
    }
  }, [inputVal])

  return (
    <>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
          <span className="sr-only">Search</span>
        </span>
        <input
          className="block w-full rounded border border-skin-fill 
          border-opacity-40 bg-skin-fill py-3 pl-10
          pr-3 placeholder:italic placeholder:text-opacity-75 
          focus:border-skin-accent focus:outline-none"
          placeholder="Search for anything..."
          type="text"
          name="search"
          value={inputVal}
          onChange={handleChange}
          autoComplete="off"
          // autoFocus
          ref={inputRef}
        />
      </label>

      {inputVal.length > 1 && (
        <div className="mt-8">
          Found {searchResults?.length}
          {searchResults?.length && searchResults?.length === 1
            ? " result"
            : " results"}{" "}
          for '{inputVal}'
        </div>
      )}

      <ul>
        {searchResults &&
          searchResults.map(({ item, refIndex }) => (
            <Card
              href={`/posts/${item.slug}/`}
              frontmatter={item.data}
              key={`${refIndex}-${item.slug}`}
            />
          ))}
      </ul>
    </>
  )
}
