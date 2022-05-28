    let searchForm = document.getElementById("searchForm")
    let pageLinks = document.getElementsByClassName("page-link")

    if(searchForm) {
        for(let i=0; pageLinks.length > i;  i++){
        pageLinks[i].addEventListener('click', function (e) {
            e.preventDefault()

            let page = this.dataset.page
            console.log('Page:', page)

            searchForm.innerHTML += `<input value=${page} name="page" value="page" hidden/>`

            searchForm.submit()
        }
        )
        }
    }


    let tags = document.getElementsByClassName("project-tag")

    for (let i = 0; tags.length > i; i++) {
        tags[i].addEventListener("click", (e) => {
            let tag_id = e.target.dataset.tag
            let project_id = e.target.dataset.project
            // console.log(tag_id, project_id)

            fetch("http://127.0.0.1:8000/api/remove_tag/", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "project": project_id, "tag": tag_id })
            })
                .then(responce => responce.json())
                .then(data => {
                    e.target.remove()
                })

        })
    }
