<script>
  import SvelteMarkdown from "svelte-markdown";
  //  Taken from the readme
  const source = `
  # 3D Turtles

3D Turtles is an exploration into combining art, mathematics, and blockchain!
So, what is a 3D turtle? First imagine orienting a turtle in 3 dimensional space.
We then tell the turtle to move according to a set of rules — "movement rules" if you will.

These rules depend mainly on 2 fractions. Lets take 13/99 and 21/99 for example.
13/99 = 0.131313... and 21/99 = 0.21212121.... The rules are as follows:

For each time step that the turtle moves, determine the direction to move the turtle towards by looking at the current
digit of 13/99 and 21/99. So, for the first time step, we look at the first digits of 0.131313... and 0.212121... to get "1" and "2".
Then, for the second time step, we use "3" and "1" to generate the movement direction.

Why is this interesting?

1. There are many visually stunning patterns which can be generated. See our [curated list](https://github.com/Lev-Stambler/3D-Turtles/tree/master/curated-list) of shapes.
2. There is complexity observed in the shapes drawn reveals some deep fundamental truths about our universe: incredible complexity can evolve from the simplest rules.
3. The math behind whether a drawn patter "closes" (i.e. does not go on forever) or not is surprising and quite nice.

For details, interesting math, and fun open problems, see the [paper](https://github.com/Lev-Stambler/3D-Turtles/raw/master/paper/Paper.pdf).
If you are interested in playing around and generating patterns, see the [demo site](https://3d-turtle.netlify.app/#).
For the codebase see the [Github Repository](https://github.com/Lev-Stambler/3D-Turtles).

## Inspiration
3D Turtles was inspired by ["Plotting Pi and Searching for Mona Lisa"](https://www.youtube.com/watch?v=tkC1HHuuk7c), a video released by the fantastic YouTube channel, Numberphile. Essentially, the video explores using [Turtle graphic](https://en.wikipedia.org/wiki/Turtle_graphics) to explore visualizations of rational numbers (e.g. 1/13) and irrational numbers (e.g. Pi).
`;
</script>

<SvelteMarkdown {source} />
