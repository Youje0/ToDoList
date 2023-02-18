import React from "react";

function MainContent({ checker, title }: { checker: number; title: string }) {
  const idChecker = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): number => {
    const id = checker;
    console.log(id);
    return id;
  };

  return (
    <div onClick={(event) => idChecker(event)} className="toDoBox">
      <div className="toDoBoxImage">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default MainContent;
