<Image
  alt="test"
  id="id1"
  className="a-class-name"
  src="https://placeholder.pics/svg/200/00b9ff/FFFFFF"
  loading="lazy"
  onLoad={() => console.log('image loaded')}
  onError={(errorEvent) => console.log(errorEvent)}
  stretch={false}
  shrink={true}
/>;
