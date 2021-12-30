import create from 'zustand';

const useSidebar = create((set) => ({

    mode: "acctMgt",
    modeSwap: (newMode) => set((state) => ({ mode: newMode })),
    modesList: {
        mainNavMenu: {
            navInclude: false,
            link: null,
            spellOut: "Main Navigation"
        },
        acctMgt: {
            navInclude: true,
            link: null,
            order: -3,
            spellOut: "Account"
        },
        charSelect: {
            navInclude: true,
            link: "/bestiary",
            order: 0,
            spellOut: "View Creature Menu"
        },
        play: {
            navInclude: true,
            link: null,
            order: -2,
            spellOut: "Play Mode for Z-Wolf"
        },
        campaignMgt: {
            navInclude: true,
            link: null,
            order: 3,
            spellOut: "Manage Campaigns"
        },
        legal: {
            navInclude: true,
            link: "/legal",
            order: 5,
            spellOut: "Legal Stuff"
        },
        donate: {
            navInclude: false,
            link: null,
            spellOut: "Donate to Z-Wolf"
        },
        newChar: {
            navInclude: true,
            link: null,
            order: 0.5,
            spellOut: "Create New Character"
        },
        toc: {
            navInclude: true,
            link: "/",
            order: -1,
            spellOut: "Table of Contents"
        },
        libPreview: {
            navInclude: false,
            link: null,
            spellOut: "Library Preview"
        }
    },
    manualSave: false,
    toggleManualSave: () => set((state) => ({ manualSave: !state.manualSave })),
    previewType: null,
    setPreviewType: (type) => set((state) => ({ previewType: type })),
    previewSlug: null,
    setPreviewSlug: (slug) => set((state) => ({ previewSlug: slug }))

}));

export default useSidebar;