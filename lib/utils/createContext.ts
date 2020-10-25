import React from 'react'

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export function createContext<T extends unknown | null>() {
  const context = React.createContext<T | undefined>(undefined)

  function useContext() {
    const _context = React.useContext(context)
    if (_context === undefined)
      throw new Error('useContext must be inside a Provider with a value')
    return _context
  }
  return [useContext, context.Provider] as const
}
