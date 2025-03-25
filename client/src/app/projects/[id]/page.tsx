"use client";

import React, { useState } from 'react'
import ProjectHeader from '../ProjectHeader';
import BoardView from '../boardView';
type Props = {
  params: Promise<{ id: string }>;
};

const page = ({params}: Props) => {
  const resolvedParams = React.use(params);

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      { activeTab === "Board" && <BoardView id={resolvedParams.id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />}
    </div>
  )
}

export default page;