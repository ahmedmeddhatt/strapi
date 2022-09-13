/*
 *
 * HomePage
 *
 */

import React ,{memo,useState} from 'react';
import { nanoid } from "nanoid";

// import PropTypes from 'prop-types';
import { Layout,ContentLayout,BaseHeaderLayout} from '@strapi/design-system/Layout';
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import { Illo } from '../../components/Illo';
import TodoModal from '../../components/TodoModal';
import TodoCount from '../../components/TodoCount';
import TodoTable from '../../components/TodoTable'

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false)

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleTodo(data) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(id, data) {
    alert("Add Edit Todo in API");
  }

  return (
    <div>
   

     
      <Layout>
              <BaseHeaderLayout 
              title = 'welcome'
              subtitle= 'welcommmmmm'
              as='h2'
              />
                    
            
                    <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <>
            <TodoCount count={todoData.length} />
            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>
           {showModal&&  <TodoModal setShowModal={setShowModal} addTodo={addTodo}/>}
              </Layout>

    </div>
  );
};

export default memo(HomePage);


