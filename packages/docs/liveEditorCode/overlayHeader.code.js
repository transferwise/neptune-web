<OverlayHeader
  avatar={
    <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
      <ProfileIcon />
    </Avatar>
  }
  logo={
    <img
      alt="logo"
      src="https://transferwise.com/public-resources/assets/logos/transferwise/logo.svg"
      width="138"
      height="24"
    />
  }
  onClose={() => console.log('Close clicked')}
/>;
