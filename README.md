# DisqoNotepad
    Project was implemented using
    * Typescript
    * AngularJS 
    * LESS 

# Component
    * NotepadComponent - main component that works with notepad related data, also calls notepad-http.service
    * AddNoteComponent, EditNoteComponent - emiting events for NotepadComponent once note changed or added

# Model
    Intefaces for project level domain objects

# Services
    Provides http and helper services 
    * base-http.service.ts is a base class that provides base functionality for http services, 
    * notepad-http.service - returs http observables to work with git gist
    * all the services are extends base-http.service


# DOCS folde
    Uses docs folder to store builded angular project to host on github

# Environment
    Stores local env based data` URLs and TOKENs

# LIVE
    live example - https://arturkeyan.github.io/DisqoNotepad/