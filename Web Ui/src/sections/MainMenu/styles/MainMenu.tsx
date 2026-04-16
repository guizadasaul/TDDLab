const MainMenuSX = {
    dFlexNoSm: { display: { xs: "flex", sm: "none" } },
    dNoneSmBlock: { display: { xs: "none", sm: "block" } },
    iconButton: { display: { xs: "flex", sm: "none" } },
    button: (activeButton: boolean | undefined) => ({
      borderBottom: activeButton ? "2px solid var(--color-surface)" : "none",
      color: activeButton ? "var(--color-surface)" : "var(--text-muted)",
    }),

    sidebar: {
      width: 220,
      height: "100vh",
      backgroundColor: "var(--color-surface)",
      display: "flex",
      flexDirection: "column",
      boxShadow: "2px 0 8px var(--transparent-18)",
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: 1200,
    },
    logoLink: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 3,
      py: 3,
      textDecoration: "none",
      color: "inherit",
    },
    logoTextContainer: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 2,
    },
    logoLetterRow: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    logoTddLetter: {
      color: "var(--text-primary)",
    },
    logoLabLetter: {
      color: "var(--color-primary-600)",
    },
    navList: {
      flexGrow: 1,
      px: 1,
    },
    navListItem: {
      mb: 4,
    },
    navListItemButton: (isActive: boolean) => ({
      borderRadius: 2,
      color: isActive ? "var(--color-primary-600)" : "var(--text-primary)",
      backgroundColor: isActive ? "var(--color-surface-2)" : "transparent",
      "&:hover": {
        backgroundColor: "var(--color-surface-2)",
      },
      "& .MuiListItemIcon-root": {
        color: isActive ? "var(--color-primary-600)" : "var(--text-primary)",
        minWidth: 40,
      },
    }),
    loginContainer: {
      px: 2,
      py: 2,
    },
}

export default MainMenuSX;
