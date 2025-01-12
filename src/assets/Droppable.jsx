import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import styles from './Droppable.module.css'

export const Droppable = ({isDroppedProp, key, ...props}) => {
  const { isOver, setNodeRef } = useDroppable({id: 'droppable'});
  const style = {
    backgroundColor: isOver ? 'lightGreen' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style} className={styles.droppable}>
      {isDroppedProp}
    </div>
  );
}