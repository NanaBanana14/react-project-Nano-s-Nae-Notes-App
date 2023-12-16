import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/api'; 
import { showFormattedDate } from '../utils/index';
import LoadingIndicator from '../component/LoadingIndicator';

function NoteDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        // Error handling
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{showFormattedDate(note.createdAt)}</p>
      <p>{note.body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string,
};

export default NoteDetail;
