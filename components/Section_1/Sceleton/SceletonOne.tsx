function SceletonOne() {
  return (
    <>
      {Array.from({ length: 5 }).map((item, index) => (
        <svg
          className="xl:scale-[1.3]"
          key={index}
          width="100%"
          height="20"
          viewBox="0 0 146 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          //   preserveAspectRatio="none"
        >
          <rect x="40" width="74" height="6" rx="3" fill="#313139" />
          <rect x="122" width="24" height="6" rx="3" fill="#313139" />
          <rect x="86" y="14" width="24" height="6" rx="3" fill="#313139" />
          <rect x="40" y="14" width="36" height="6" rx="3" fill="#313139" />
          <rect width="20" height="20" rx="5" fill="#313139" />
        </svg>
      ))}
    </>
  );
}

export default SceletonOne;
