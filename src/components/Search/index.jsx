import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import '../../scss/search.scss'

const Search = props => {
    const { onSubmit } = props
    const typingTimeoutRef = useRef(null)
    const [q, setQ] = useState('')

    const handleChange = (event) => {
        let value = event.target.value
        setQ(value)

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            onSubmit(value)
        }, 300);

    }
    return (
        <div className="form__location">
            <input
                type="search"
                value={q}
                onChange={handleChange}
                placeholder="Search by city name ..." />
        </div>
    )
}

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Search
