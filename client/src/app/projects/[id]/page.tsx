"use client";

import React, { useState } from 'react'
import ProjectHeader from '../ProjectHeader';
import BoardView from '../boardView';
import ListView from '../ListView';
import Table from "../TableView";
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
      { activeTab === "List" && <ListView id={resolvedParams.id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />}
      { activeTab === "Table" && <Table  id={resolvedParams.id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />}
    </div>
  )
}

export default page;