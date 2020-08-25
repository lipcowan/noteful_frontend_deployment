import React from 'react'

export default React.createContext({
  notes: [],
  folders: [],
  addFolder: () => {},
  editFolder: () => {},
  deleteFolder: () => {},
  addNote: () => {},
  editNote: () => {},
  deleteNote: () => {},
})
