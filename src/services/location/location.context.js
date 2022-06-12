import React from 'react'
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext()

export const LocationProvider = ({children}) => {
	const [keyword, setKeyword] = React.useState("San francisco")
	const [location, setLocation] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState(null)

	const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

	React.useEffect(() => {
		if (!keyword.length) {
      // don't do anything
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
				setLocation(result)
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
	}, [keyword])

	return (
		<LocationContext.Provider value={{ keyword, location, isLoading, error, search: onSearch }}>{children}</LocationContext.Provider>
	)
}
