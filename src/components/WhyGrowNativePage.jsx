import React from "react";
import milkweed from "./images/milkweed2.png";

function WhyGrowNativePage() {
  return (
    <>
      <h1 className="center text-gray" style={{ fontSize: "2.5rem" }}>
        Why Grow Native?
      </h1>
      <div style={{ width: "75%", margin: "auto", position: "relative" }}>
        <img src={milkweed} alt="Butterfly on milkweed flower" />

        <div className="text-gray padding-20  info">
          <p>
            <b>
              Native plants are those that occur naturally in a region in which
              they evolved. They are the ecological basis upon which life
              depends, including birds and people. Without them and the insects
              that co-evolved with them, local birds cannot survive. For
              example, research by the entomologist Doug Tallamy has shown that
              native oak trees support over 500 species of caterpillars whereas
              ginkgos, a commonly planted landscape tree from Asia, host only 5
              species of caterpillars. When it takes over 6,000 caterpillars to
              raise one brood of chickadees, that is a significant difference.
            </b>
          </p>
          <p>
            Unfortunately, most of the landscaping plants available in nurseries
            are alien species from other countries. These exotic plants not only
            sever the food web, but many have become invasive pests,
            outcompeting native species and degrading habitat in remaining
            natural areas.
          </p>
          <p>
            Restoring native plant habitat is vital to preserving biodiversity.
            By creating a native plant garden, each patch of habitat becomes
            part of a collective effort to nurture and sustain the living
            landscape for birds and other animals.
          </p>
          <p>
            <h3 style={{ marginTop: "2rem" }}>Benefits of Native Plants:</h3>
          </p>
          <p>
            <b>Low maintenance:</b> Once established, native plants generally
            require little maintenance.
          </p>
          <p>
            <b>Beauty:</b> Many native plants offer beautiful showy flowers,
            produce abundant colorful fruits and seeds, and brilliant seasonal
            changes in colors from the pale, thin greens of early spring, to the
            vibrant yellows and reds of autumn.
          </p>
          <p>
            <b>Healthy Places for People:</b> Lawns and the ubiquitous
            bark-mulched landscapes are notorious for requiring profuse amounts
            of artificial fertilizers and synthetic chemical pesticides and
            herbicides. The traditional suburban lawn, on average, has 10x more
            chemical pesticides per acre than farmland. By choosing native
            plants for your landscaping, you are not only helping wildlife, but
            you are creating a healthier place for yourself, your family, and
            your community.
          </p>
          <p>
            <b>Helping the Climate:</b> Landscaping with native plants can
            combat climate change. In addition to the reduced noise and carbon
            pollution from lawn mower exhaust, many native plants, especially
            long-living trees like oaks and maples, are effective at storing the
            greenhouse gas carbon dioxide.
          </p>
          <p>
            <b>Conserving Water:</b> Because native plants are adapted to local
            environmental conditions, they require far less water, saving time,
            money, and perhaps the most valuable natural resource, water.
          </p>
          <p>
            <b>Wildlife:</b> In addition to providing vital habitat for birds,
            many other species of wildlife benefits as well. The colorful array
            of butterflies and moths, including the iconic monarch, the
            swallowtails, tortoiseshells, and beautiful blues, are all dependent
            on very specific native plant species. Native plants provide nectar
            for pollinators including hummingbirds, native bees, butterflies,
            moths, and bats. They provide protective shelter for many mammals.
            The native nuts, seeds, and fruits produced by these plants offer
            essential foods for all forms of wildlife.
          </p>
          <p>
            <i>Text taken from Audubon.org</i>
          </p>
        </div>
      </div>
    </>
  );
}

export default WhyGrowNativePage;
