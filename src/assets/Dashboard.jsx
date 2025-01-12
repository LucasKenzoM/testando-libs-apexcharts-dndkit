import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  arrayMove,
} from '@dnd-kit/sortable';
import { v4 as uuidv4 } from 'uuid';


import { SortableItem } from './SortableItem';
import { Header } from './Header';
import { CircularChart } from './CircularChart';
import { LineChart } from './LineChart';
import { AreaChart } from './AreaChart';
import { ColumnChart } from './ColumnChart';
import { MultiAxisChart } from './MultiAxisChart';
import { GaugeChart } from './GaugeChart';

export const Dashboard = () => {

  const [items, setItems] = useState([]);

  const handleNewCircularChart = () => {
    setItems([...items, {
      id: uuidv4(),
      name: items.length + 1,
      chart: <CircularChart />
    }])
  }

  const handleNewGaugeChart = () => {
    setItems([...items, {
      id: uuidv4(),
      name: items.length + 1,
      chart: <GaugeChart />
    }])
  }

  const handleNewLineChart = () => {
    setItems([...items, {
      id: uuidv4(),
      name: items.length + 1,
      chart: <LineChart />
    }])
  }

  const handleNewAreaChart = () => {
    setItems([...items, {
      id: uuidv4(),
      name: items.length + 1,
      chart: <AreaChart />
    }])
  }

  const handleNewColumnChart = () => {
    setItems([...items, {
      id: uuidv4(),
      name: items.length + 1,
      chart: <ColumnChart />
    }])
  }

  const handleNewMultiAxisChart = () => {
    setItems([...items, {
      id: uuidv4(),
      name: items.length + 1,
      chart: <MultiAxisChart />
    }])
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))',
      gap: '1rem',
      margin: '1rem'
    }
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      setItems(newItems);
    }
  };

  return (
    <>
      <Header
        handleNewCircularChart={handleNewCircularChart}
        handleNewGaugeChart={handleNewGaugeChart}
        handleNewLineChart={handleNewLineChart}
        handleNewAreaChart={handleNewAreaChart}
        handleNewColumnChart={handleNewColumnChart}
        handleNewMultiAxisChart={handleNewMultiAxisChart}
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items}>
          <div style={styles.grid}>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                name={item.name}
                chart={item.chart}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
}