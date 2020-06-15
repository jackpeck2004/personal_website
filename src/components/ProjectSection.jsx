import { Table, Tag } from "antd";
import React from "react";

const columns = [
    {
        title: "Name",
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>
    },
    {
        title: 'Languages',
        dataIndex: 'languages',
        key: 'languages',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    }

]

const data = [
    {
        name: "Loop",
        languages: ["cool", "teacher"]
    }
]

const ProjectSection = () => {
    return (
        <section className="projects">
            {/* <h1>Projects Coming Soon...</h1> */}
            <Table columns={columns} dataSource={data} />
        </section>

    )
}

export default ProjectSection