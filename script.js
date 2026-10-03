// =====================================================
// ACADEMIC NAVIGATOR
// =====================================================


// =====================================================
// CSE DOMAIN
// =====================================================

function openCSE() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>💻 Computer Science</h1>

            <p>Choose a subject to explore</p>

            <div class="subject-container">

                <div class="subject-card" onclick="openDSA()">
                    <h2>📚 Data Structures</h2>
                    <p>Algorithms, Trees, Graphs & more</p>
                </div>

                <div class="subject-card">
                    <h2>🗄️ DBMS</h2>
                    <p>Database Management Systems</p>
                </div>

                <div class="subject-card">
                    <h2>⚙️ Operating Systems</h2>
                    <p>Processes, Memory & File Systems</p>
                </div>

                <div class="subject-card">
                    <h2>🌐 Computer Networks</h2>
                    <p>Networking & Communication</p>
                </div>

                <div class="subject-card">
                    <h2>☕ OOP</h2>
                    <p>Object Oriented Programming</p>
                </div>

            </div>

        </div>

    `;
}


// =====================================================
// DATA STRUCTURES
// =====================================================

function openDSA() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>📚 Data Structures</h1>

            <p>Choose a book to start learning</p>

            <div class="subject-container">

                <div class="subject-card" onclick="openDSABook()">
                    <h2>📖 Data Structures & Algorithms</h2>
                    <p>Arrays, Linked Lists, Trees, Graphs</p>
                </div>

                <div class="subject-card">
                    <h2>📖 Algorithms</h2>
                    <p>Sorting, Searching & Graph Algorithms</p>
                </div>

                <div class="subject-card">
                    <h2>📖 Advanced Data Structures</h2>
                    <p>Trees, Heaps, Hashing & Graphs</p>
                </div>

            </div>

        </div>

    `;
}


// =====================================================
// DATA STRUCTURES & ALGORITHMS BOOK
// =====================================================

function openDSABook() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>📖 Data Structures & Algorithms</h1>

            <p>Choose a chapter to explore</p>

            <div class="subject-container">

                <div class="subject-card">
                    <h2>Chapter 1</h2>
                    <p>Introduction to Data Structures</p>
                </div>

                <div class="subject-card">
                    <h2>Chapter 2</h2>
                    <p>Arrays</p>
                </div>

                <div class="subject-card">
                    <h2>Chapter 3</h2>
                    <p>Linked Lists</p>
                </div>

                <div class="subject-card">
                    <h2>Chapter 4</h2>
                    <p>Stacks & Queues</p>
                </div>

                <div class="subject-card" onclick="openTrees()">
                    <h2>Chapter 5</h2>
                    <p>Trees</p>
                </div>

                <div class="subject-card">
                    <h2>Chapter 6</h2>
                    <p>Graphs</p>
                </div>

                <div class="subject-card">
                    <h2>Chapter 7</h2>
                    <p>Sorting Algorithms</p>
                </div>

                <div class="subject-card">
                    <h2>Chapter 8</h2>
                    <p>Searching Algorithms</p>
                </div>

            </div>

        </div>

    `;
}


// =====================================================
// TREES
// =====================================================

function openTrees() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>🌳 Trees</h1>

            <p>Choose a topic to start learning</p>

            <div class="subject-container">

                <div class="subject-card" onclick="openBinaryTree()">
                    <h2>🌱 Binary Tree</h2>
                    <p>Learn the basic structure of binary trees</p>
                </div>

                <div class="subject-card">
                    <h2>🔍 Binary Search Tree</h2>
                    <p>Searching, insertion and deletion</p>
                </div>

                <div class="subject-card">
                    <h2>🔄 Tree Traversal</h2>
                    <p>Inorder, Preorder and Postorder</p>
                </div>

                <div class="subject-card">
                    <h2>⚖️ AVL Tree</h2>
                    <p>Self-balancing binary search tree</p>
                </div>

                <div class="subject-card">
                    <h2>🏔️ Heap</h2>
                    <p>Min Heap and Max Heap</p>
                </div>

            </div>

        </div>

    `;
}


// =====================================================
// BINARY TREE
// =====================================================

function openBinaryTree() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>🌱 Binary Tree</h1>

            <p>Learn Binary Trees from multiple sources</p>

            <div class="subject-container">

                <!-- READ -->
                <div class="subject-card" onclick="openBinaryTreeRead()">
                    <h2>📖 Read</h2>
                    <p>Understand the concept of Binary Trees</p>
                </div>

                <!-- YOUTUBE -->
                <div class="subject-card" onclick="openBinaryTreeYouTube()">
                    <h2>🎥 YouTube</h2>
                    <p>Find educational videos</p>
                </div>

                <!-- AI -->
                <div class="subject-card" onclick="openAIExplain()">
                    <h2>🤖 AI Explain</h2>
                    <p>Get a simple explanation</p>
                </div>

                <!-- QUIZ -->
                <div class="subject-card" onclick="openBinaryTreeQuiz()">
                    <h2>📝 Quiz</h2>
                    <p>Test your understanding</p>
                </div>

            </div>

        </div>

    `;
}


// =====================================================
// BINARY TREE - READ
// =====================================================

function openBinaryTreeRead() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>📖 Binary Tree</h1>

            <div class="learning-content">

                <h2>What is a Binary Tree?</h2>

                <p>
                    A Binary Tree is a hierarchical data structure
                    in which each node can have at most two children.
                </p>


                <h2>🌳 Basic Structure</h2>

                <p>
                    Each node in a Binary Tree can have:
                </p>

                <ul>
                    <li>One left child</li>
                    <li>One right child</li>
                    <li>Or no children</li>
                </ul>


                <h2>🔢 Example</h2>

                <div class="tree-example">

                    <div class="tree-level">

                        <div class="tree-node">
                            10
                        </div>

                    </div>


                    <div class="tree-lines">
                        ↙️ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↘️
                    </div>


                    <div class="tree-level">

                        <div class="tree-node">
                            5
                        </div>

                        <div class="tree-node">
                            15
                        </div>

                    </div>


                    <div class="tree-lines">
                        ↙️ &nbsp;&nbsp; ↘️
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        ↙️ &nbsp;&nbsp; ↘️
                    </div>


                    <div class="tree-level">

                        <div class="tree-node">
                            2
                        </div>

                        <div class="tree-node">
                            7
                        </div>

                        <div class="tree-node">
                            12
                        </div>

                        <div class="tree-node">
                            20
                        </div>

                    </div>

                </div>


                <h2>📌 Important Terms</h2>

                <ul>

                    <li>
                        <b>Root:</b>
                        The top node of the tree.
                    </li>

                    <li>
                        <b>Parent:</b>
                        A node that has one or more children.
                    </li>

                    <li>
                        <b>Child:</b>
                        A node connected below another node.
                    </li>

                    <li>
                        <b>Leaf:</b>
                        A node that has no children.
                    </li>

                    <li>
                        <b>Height:</b>
                        The longest path from a node to a leaf.
                    </li>

                </ul>


                <h2>💡 Key Point</h2>

                <p>
                    A node in a Binary Tree can have
                    <b>at most two children</b>.
                </p>


                <h2>⏱️ Applications</h2>

                <ul>

                    <li>Searching and sorting</li>
                    <li>Expression trees</li>
                    <li>File system representation</li>
                    <li>Hierarchical data representation</li>

                </ul>

            </div>

        </div>

    `;
}


// =====================================================
// BINARY TREE - YOUTUBE
// =====================================================

function openBinaryTreeYouTube() {

    window.open(
        "https://www.youtube.com/results?search_query=Binary+Tree+Data+Structure",
        "_blank"
    );

}


// =====================================================
// AI EXPLAIN
// =====================================================

function openAIExplain() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>🤖 AI Explanation</h1>

            <div class="learning-content">

                <h2>Binary Tree in Simple Words</h2>

                <p>
                    Imagine a family tree.
                    One person can have two children.
                    Similarly, in a Binary Tree,
                    every node can have at most two children.
                </p>

                <h2>🌳 Example</h2>

                <p>

                    If 10 is the root:

                </p>

                <p>

                    10 → 5 and 15

                </p>

                <p>

                    Then 5 and 15 are children of 10.

                </p>

                <h2>🧠 Remember</h2>

                <p>

                    Binary = Two

                </p>

                <p>

                    Therefore, a Binary Tree node can have
                    maximum <b>2 children</b>.

                </p>

            </div>

        </div>

    `;

}


// =====================================================
// BINARY TREE - QUIZ
// =====================================================

function openBinaryTreeQuiz() {

    document.body.innerHTML = `

        <div class="subject-page">

            <h1>📝 Binary Tree Quiz</h1>

            <div class="quiz-box">

                <h2>
                    Question 1
                </h2>

                <p>
                    How many children can a node have
                    at maximum in a Binary Tree?
                </p>

                <button onclick="checkAnswer(1)">
                    1
                </button>

                <button onclick="checkAnswer(2)">
                    2
                </button>

                <button onclick="checkAnswer(3)">
                    3
                </button>

                <button onclick="checkAnswer(4)">
                    4
                </button>

                <p id="quiz-result"></p>

            </div>

        </div>

    `;
}


// =====================================================
// CHECK QUIZ ANSWER
// =====================================================

function checkAnswer(answer) {

    const result = document.getElementById("quiz-result");

    if (answer === 2) {

        result.innerHTML = "✅ Correct! A Binary Tree node can have at most 2 children.";

    } else {

        result.innerHTML = "❌ Incorrect. Try again!";

    }

}

// =====================================================
// SEARCH
// =====================================================

function searchTopic() {

    const input = document.getElementById("searchInput");

    const results = document.getElementById("searchResults");

    const query = input.value.toLowerCase().trim();

    if (query === "") {
        results.innerHTML = "";
        return;
    }

    if (
        query.includes("binary tree") ||
        query.includes("binarytree")
    ) {

        results.innerHTML = `

            <div class="search-result-card"
                 onclick="openCSE(); setTimeout(openDSA, 100);">

                <h3>🌱 Binary Tree</h3>

                <p>
                    CSE → Data Structures → Trees → Binary Tree
                </p>

            </div>

        `;

    }

    else if (
        query.includes("data structure") ||
        query.includes("dsa")
    ) {

        results.innerHTML = `

            <div class="search-result-card"
                 onclick="openDSA()">

                <h3>📚 Data Structures</h3>

                <p>
                    CSE → Data Structures
                </p>

            </div>

        `;

    }

    else if (
        query.includes("dbms") ||
        query.includes("database")
    ) {

        results.innerHTML = `

            <div class="search-result-card">

                <h3>🗄️ DBMS</h3>

                <p>
                    CSE → Database Management Systems
                </p>

                <small>
                    More content coming soon
                </small>

            </div>

        `;

    }

    else if (
        query.includes("cyber") ||
        query.includes("cyber security")
    ) {

        results.innerHTML = `

            <div class="search-result-card">

                <h3>🔐 Cyber Security</h3>

                <p>
                    Security & Networking
                </p>

            </div>

        `;

    }

    else {

        results.innerHTML = `

            <div class="no-result">

                ❌ No topic found.

                <br>

                Try:
                <b>Binary Tree</b>,
                <b>Data Structures</b>,
                <b>DBMS</b>

            </div>

        `;

    }

}